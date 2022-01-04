from flask import request
from flask_restful import Resource

from managers.auth import auth
from managers.car import CarManager
from models.enums import RoleType
from schemas.request.car import CarCreateRequestSchema
from schemas.response.car import CarCreateResponseSchema
from util.decorators import validate_schema, permission_required


class ListCreateCar(Resource):
    @staticmethod
    def get():
        cars = CarManager.get_all()
        schema = CarCreateResponseSchema()
        return schema.dump(cars, many=True)

    @auth.login_required
    @permission_required(RoleType.user)
    @validate_schema(CarCreateRequestSchema)
    def post(self):
        current_user = auth.current_user()
        car = CarManager.create(request.get_json(), current_user.pk)
        schema = CarCreateResponseSchema()
        return schema.dump(car), 201


class EditDeleteCar(Resource):
    def get(self, pk):
        car = CarManager.get(pk)
        schema = CarCreateResponseSchema()
        return schema.dump(car)

    @auth.login_required
    @permission_required(RoleType.administrator)
    @validate_schema(CarCreateRequestSchema)
    def put(self, pk):
        updated_car = CarManager.update(request.get_json(), pk)
        schema = CarCreateResponseSchema()
        return schema.dump(updated_car)

    @auth.login_required
    @permission_required(RoleType.administrator)
    def delete(self, pk):
        CarManager.delete(pk)
        return {"message": "Car deleted successfully"}, 200
