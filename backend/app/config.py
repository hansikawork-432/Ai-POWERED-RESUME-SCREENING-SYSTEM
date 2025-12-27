# ✅ Loads your secret keys from backend/.env
# (SAFE – does not expose keys)

from pathlib import Path
from dotenv import load_dotenv
import os

# Path to real .env file (local ONLY)
env_path = Path(__file__).resolve().parent.parent / ".env"

# Load secret keys
load_dotenv(dotenv_path=env_path)

# Environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
DATABASE_URL = os.getenv("DATABASE_URL")
SECRET_KEY = os.getenv("SECRET_KEY")

# Optional: Warning if secrets missing
if not OPENAI_API_KEY:
    print("⚠️ WARNING: OPENAI_API_KEY is missing. Create backend/.env with your real key.")
