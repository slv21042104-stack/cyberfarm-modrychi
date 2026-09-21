from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    app_name: str = "CyberFarm: Modrychi"
    database_url: str = "postgresql+asyncpg://cyberfarm:cyberfarm@localhost:5432/cyberfarm"
    telegram_bot_token: str = ""
    telegram_initdata_max_age: int = 86400
    monobank_api_token: str = ""
    crypto_pay_token: str = ""
    frontend_url: str = "http://localhost:8000"
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

settings = Settings()
