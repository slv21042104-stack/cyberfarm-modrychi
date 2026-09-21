import hashlib
import hmac
import json
import time
from urllib.parse import parse_qsl
from fastapi import HTTPException
from config import settings

def validate_telegram_init_data(init_data: str) -> dict:
    if not init_data:
        raise HTTPException(401, "Missing Telegram initData")
    parsed = dict(parse_qsl(init_data, keep_blank_values=True))
    received_hash = parsed.pop("hash", None)
    if not received_hash:
        raise HTTPException(401, "Missing Telegram hash")
    data_check_string = "\n".join(f"{k}={parsed[k]}" for k in sorted(parsed))
    secret_key = hmac.new(b"WebAppData", settings.telegram_bot_token.encode(), hashlib.sha256).digest()
    calculated_hash = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(calculated_hash, received_hash):
        raise HTTPException(401, "Invalid Telegram initData")
    try:
        auth_date = int(parsed.get("auth_date", "0"))
    except ValueError:
        raise HTTPException(401, "Invalid auth_date")
    if time.time() - auth_date > settings.telegram_initdata_max_age:
        raise HTTPException(401, "Telegram initData expired")
    try:
        parsed["user"] = json.loads(parsed["user"])
    except (KeyError, json.JSONDecodeError):
        raise HTTPException(401, "Invalid Telegram user")
    return parsed
