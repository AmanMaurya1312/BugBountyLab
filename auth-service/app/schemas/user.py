from pydantic import BaseModel
from pydantic import ConfigDict
from pydantic import EmailStr


class UserCreate(BaseModel):

    email: EmailStr

    full_name: str

    password: str


class UserResponse(BaseModel):

    id: int

    email: EmailStr

    full_name: str

    is_active: bool

    is_admin: bool

    model_config = ConfigDict(
        from_attributes=True,
    )