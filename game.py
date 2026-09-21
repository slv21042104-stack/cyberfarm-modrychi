from decimal import Decimal
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from ..models import InfrastructureModule, SupportPackage, User

def normalize_language(language_code: str | None) -> str:
    code = (language_code or "en").lower()
    if code.startswith("uk"): return "uk"
    if code.startswith("ja"): return "ja"
    return "en"

def status_for(current: Decimal, required: Decimal) -> str:
    if current <= 0: return "locked"
    if current >= required: return "completed"
    return "funding"

async def get_or_create_user(db: AsyncSession, telegram_user: dict) -> User:
    telegram_id = int(telegram_user["id"])
    result = await db.execute(select(User).where(User.telegram_id == telegram_id))
    user = result.scalar_one_or_none()
    language = normalize_language(telegram_user.get("language_code"))
    if user:
        user.username = telegram_user.get("username")
        user.language_code = language
        await db.commit()
        await db.refresh(user)
        return user
    user = User(telegram_id=telegram_id, username=telegram_user.get("username"),
                language_code=language, balance_crypto=Decimal("0"), balance_uah=Decimal("0"))
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user

async def get_infrastructure(db):
    result = await db.execute(select(InfrastructureModule).order_by(InfrastructureModule.id))
    return result.scalars().all()

async def get_support_packages(db):
    result = await db.execute(select(SupportPackage).where(SupportPackage.active.is_(True)).order_by(SupportPackage.id))
    return result.scalars().all()
