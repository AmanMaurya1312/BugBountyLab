from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserCreate
from app.security.password import hash_password


class AuthService:
    def __init__(self, db: Session):
        self.repository = UserRepository(db)

    def register(self, data: UserCreate) -> User:

        existing_user = self.repository.get_by_email(data.email)

        if existing_user:
            raise HTTPException(
                status_code=409,
                detail="Email already registered",
            )

        user = User(
            email=data.email,
            full_name=data.full_name,
            password_hash=hash_password(data.password),
        )

        return self.repository.create(user)