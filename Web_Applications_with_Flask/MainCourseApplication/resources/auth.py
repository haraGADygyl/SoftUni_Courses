from flask import request
from flask_restful import Resource

from managers.auth import AuthManager
from managers.user import UserManager
from schemas.request.user import ComplainerRegisterRequestSchema
from util.decorators import validate_schema


class Register(Resource):
    @validate_schema(ComplainerRegisterRequestSchema)
    def post(self):
        user = UserManager.register(request.get_json())
        token = AuthManager.encode_token(user)
        return {"token": token}, 201
