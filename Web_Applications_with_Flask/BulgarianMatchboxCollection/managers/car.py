from werkzeug.exceptions import NotFound

from db import db
from models.car import CarModel


class CarManager:
    @staticmethod
    def create(car_data, user_pk):
        car_data["user_pk"] = user_pk
        car = CarModel(**car_data)
        db.session.add(car)
        db.session.commit()
        return car

    @staticmethod
    def update(car_data, pk):
        car = CarModel.query.filter_by(pk=pk).first()
        if not car:
            raise NotFound("This car does not exist")

        car.update(car_data)
        return car
