from psycopg2.errorcodes import UNIQUE_VIOLATION
from werkzeug.exceptions import BadRequest, InternalServerError
from werkzeug.security import generate_password_hash, check_password_hash

from db import db
from models.user import UserModel


class UserManager:
    @staticmethod
    def register(user_data):
        user_data["password"] = generate_password_hash(user_data["password"])
        user = UserModel(**user_data)
        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            if e.orig.pgcode == UNIQUE_VIOLATION:
                raise BadRequest("Please login")
            else:
                raise InternalServerError(
                    "Server is unavailable at the moment. Please try again later."
                )

        return user

    @staticmethod
    def login(user_data):
        user = UserModel.query.filter_by(email=user_data["email"]).first()

        if not user:
            raise BadRequest("Wrong email or password, please try again!")

        if not check_password_hash(user.password, user_data["password"]):
            raise BadRequest("Wrong email or password, please try again!")

        return user
