from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "NexaHR Auth Service"
    APP_VERSION: str = "0.1.0"

    API_V1_PREFIX: str = "/api/v1"

    DATABASE_URL: str = (
    "mysql+pymysql://root:rootpassword@localhost:3306/nexahr"
    )

    JWT_SECRET_KEY: str = "CHANGE_ME_IN_PRODUCTION"
    JWT_ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


settings = Settings()