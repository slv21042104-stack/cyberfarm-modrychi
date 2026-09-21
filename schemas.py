from datetime import datetime
from decimal import Decimal
from pydantic import BaseModel, ConfigDict

class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    telegram_id: int
    username: str | None
    language_code: str
    balance_crypto: Decimal
    balance_uah: Decimal
    registration_date: datetime

class InfrastructureResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    module_name: str
    zone: str
    description: str | None
    total_funding_required_usd: Decimal
    current_funding_usd: Decimal
    status: str

class SupportPackageResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    description: str
    price_uah: Decimal
    price_usdt: Decimal
    active: bool

class PaymentRequest(BaseModel):
    amount: Decimal
    currency: str
    purpose: str

class PaymentResponse(BaseModel):
    transaction_id: int
    provider: str
    status: str
    checkout_url: str | None = None
