from flask import request
from flask_restful import Resource

from managers.auth import auth
from managers.car import CarManager
from models.enums import RoleType
from schemas.request.car import CarCreateRequestSchema
from schemas.response.car import CarCreateResponseSchema
from util.decorators import validate_schema, permission_required


class ListCreateCar(Resource):
    def get(self):
        pass

    @auth.login_required
    @permission_required(RoleType.user)
    @validate_schema(CarCreateRequestSchema)
    def post(self):
        current_user = auth.current_user()
        car = CarManager.create(request.get_json(), current_user.pk)
        schema = CarCreateResponseSchema()
        return schema.dump(car)

    @auth.login_required
    @permission_required(RoleType.administrator)
    @validate_schema(CarCreateRequestSchema)
    def put(self, pk):
        updated_car = CarManager.update(request.get_json(), pk)
        schema = CarCreateResponseSchema()
        return schema.dump(updated_car)

    def delete(self, pk):
        pass

