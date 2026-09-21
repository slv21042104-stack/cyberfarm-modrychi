from contextlib import asynccontextmanager
from fastapi import Depends, FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import AsyncSession
from config import settings
from database import get_db, init_db
from models import PaymentTransaction
from schemas import InfrastructureResponse, PaymentRequest, PaymentResponse, SupportPackageResponse, UserResponse
from services.game import get_infrastructure, get_or_create_user, get_support_packages
from services.payments import get_payment_provider
from telegram_auth import validate_telegram_init_data

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

app = FastAPI(title="CyberFarm: Modrychi API", version="0.1.0", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=[settings.frontend_url], allow_credentials=True,
                   allow_methods=["*"], allow_headers=["*"])

async def telegram_user(x_telegram_init_data: str = Header(..., alias="X-Telegram-Init-Data")):
    return validate_telegram_init_data(x_telegram_init_data)["user"]

@app.get("/api/health")
async def health():
    return {"status": "online", "service": settings.app_name}

@app.post("/api/auth", response_model=UserResponse)
async def authenticate(db: AsyncSession = Depends(get_db),
                       x_telegram_init_data: str = Header(..., alias="X-Telegram-Init-Data")):
    data = validate_telegram_init_data(x_telegram_init_data)
    return await get_or_create_user(db, data["user"])

@app.get("/api/me", response_model=UserResponse)
async def me(telegram_user_data: dict = Depends(telegram_user), db: AsyncSession = Depends(get_db)):
    return await get_or_create_user(db, telegram_user_data)

@app.get("/api/infrastructure", response_model=list[InfrastructureResponse])
async def infrastructure(db: AsyncSession = Depends(get_db), _: dict = Depends(telegram_user)):
    return await get_infrastructure(db)

@app.get("/api/support-packages", response_model=list[SupportPackageResponse])
async def support_packages(db: AsyncSession = Depends(get_db), _: dict = Depends(telegram_user)):
    return await get_support_packages(db)

@app.post("/api/payments/create", response_model=PaymentResponse)
async def create_payment(request: PaymentRequest, db: AsyncSession = Depends(get_db),
                         telegram_user_data: dict = Depends(telegram_user)):
    if request.amount <= 0:
        raise HTTPException(400, "Amount must be positive")
    if request.currency not in {"UAH", "USDT", "TON"}:
        raise HTTPException(400, "Unsupported currency")
    provider_name = "monobank" if request.currency == "UAH" else "crypto"
    provider = get_payment_provider(provider_name)
    result = await provider.create_payment(request.amount, request.currency, request.purpose)
    tx = PaymentTransaction(telegram_id=int(telegram_user_data["id"]), provider=provider_name,
                            currency=request.currency, amount=request.amount, purpose=request.purpose,
                            status=result.status, external_id=result.external_id)
    db.add(tx)
    await db.commit()
    await db.refresh(tx)
    return PaymentResponse(transaction_id=tx.id, provider=provider_name, status=result.status,
                           checkout_url=result.checkout_url)

app.mount("/", StaticFiles(directory="../../frontend", html=True), name="frontend")
