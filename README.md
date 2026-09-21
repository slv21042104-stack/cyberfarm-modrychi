# CyberFarm: Modrychi

Telegram Web App prototype for a digital twin of a Macrobrachium rosenbergii farm.

## Run with Docker

1. Copy `.env.example` to `.env`
2. Set `TELEGRAM_BOT_TOKEN`
3. Set `FRONTEND_URL`
4. Run:

```bash
docker compose up --build
```

5. Seed initial modules:

```bash
docker compose exec app python -m app.seed
```

The payment providers are simulation adapters. Real Monobank/Crypto Pay webhook verification and settlement must be implemented before accepting real funds.

## Local non-Docker run

Start PostgreSQL, install `backend/requirements.txt`, set environment variables, then:

```bash
cd backend
python -m app.seed
uvicorn app.main:app --reload
```

## Important

Telegram `initData` is validated server-side. Do not use `initDataUnsafe` as an authentication credential.
