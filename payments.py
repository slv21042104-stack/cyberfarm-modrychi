from abc import ABC, abstractmethod
from dataclasses import dataclass
from decimal import Decimal
from uuid import uuid4

@dataclass
class PaymentResult:
    status: str
    external_id: str
    checkout_url: str | None = None

class PaymentProvider(ABC):
    @abstractmethod
    async def create_payment(self, amount: Decimal, currency: str, description: str) -> PaymentResult:
        ...

class MonobankProvider(PaymentProvider):
    async def create_payment(self, amount, currency, description):
        external_id = f"mono_demo_{uuid4().hex}"
        return PaymentResult("pending", external_id, f"/demo-payment/{external_id}")

class CryptoPayProvider(PaymentProvider):
    async def create_payment(self, amount, currency, description):
        external_id = f"crypto_demo_{uuid4().hex}"
        return PaymentResult("pending", external_id, f"/demo-payment/{external_id}")

def get_payment_provider(provider: str) -> PaymentProvider:
    if provider == "monobank": return MonobankProvider()
    if provider == "crypto": return CryptoPayProvider()
    raise ValueError(f"Unsupported payment provider: {provider}")
