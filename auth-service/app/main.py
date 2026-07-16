from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.v1.auth import router as auth_router
from app.core.config import settings
from app.db.base import Base
from app.db.session import engine

# Import all models
from app.models.user import User


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan,
)

app.include_router(
    auth_router,
    prefix=settings.API_V1_PREFIX,
)


@app.get("/")
def root():
    return {
        "project": "BugBountyLab",
        "service": "Authentication",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }