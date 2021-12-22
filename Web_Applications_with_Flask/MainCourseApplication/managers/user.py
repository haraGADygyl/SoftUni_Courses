from werkzeug.security import generate_password_hash

from db import db
from models.user import ComplainerModel


class UserManager:
    @staticmethod
    def register(user_data):
        user_data["password"] = generate_password_hash(user_data["password"])
        user = ComplainerModel(**user_data)
        db.session.add(user)
        db.session.commit()
        return user
