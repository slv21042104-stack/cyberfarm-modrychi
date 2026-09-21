import asyncio
from decimal import Decimal
from sqlalchemy import select
from .database import AsyncSessionLocal, init_db
from .models import InfrastructureModule, SupportPackage

MODULES = [
("Solar Station 20kW","energy","Solar generation system",18000),
("Battery Storage 60kWh","energy","Energy storage and backup",16000),
("Shrimp Pool 1","pools","Macrobrachium rosenbergii production pool",7000),
("Shrimp Pool 2","pools","Macrobrachium rosenbergii production pool",7000),
("Siemens LOGO! 8.3","filtration","Automation and control system",4500),
("Biofiltration System","filtration","Mechanical and biological filtration",6500),
("Dehydration Unit","drying","Shrimp snack dehydration",9000),
("Packing Line","drying","High-protein snack packing",5500),
]

async def seed():
    await init_db()
    async with AsyncSessionLocal() as db:
        if not (await db.execute(select(InfrastructureModule))).scalars().first():
            for name, zone, desc, required in MODULES:
                db.add(InfrastructureModule(module_name=name, zone=zone, description=desc,
                                            total_funding_required_usd=Decimal(str(required)),
                                            current_funding_usd=Decimal("0"), status="locked"))
        if not (await db.execute(select(SupportPackage))).scalars().first():
            db.add_all([
                SupportPackage(name="Drone Delivery Pack",
                               description="Support a real high-protein shrimp snack delivery for Ukrainian defenders.",
                               price_uah=Decimal("500"), price_usdt=Decimal("12")),
                SupportPackage(name="Frontline Nutrition Pack",
                               description="Expanded support package for frontline nutrition.",
                               price_uah=Decimal("1000"), price_usdt=Decimal("24")),
            ])
        await db.commit()

if __name__ == "__main__":
    asyncio.run(seed())
