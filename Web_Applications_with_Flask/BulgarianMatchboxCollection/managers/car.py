from werkzeug.exceptions import NotFound

from db import db
from models.car import CarModel


class CarManager:
    @staticmethod
    def get_all():
        return CarModel.query.all()

    @staticmethod
    def get(pk):
        car_q = CarModel.query.filter_by(pk=pk)
        car = car_q.first()
        if not car:
            raise NotFound("This car does not exist")

        return car

    @staticmethod
    def create(car_data, user_pk):
        car_data["user_pk"] = user_pk
        car = CarModel(**car_data)
        db.session.add(car)
        db.session.commit()
        return car

    @staticmethod
    def update(car_data, pk):
        car_q = CarModel.query.filter_by(pk=pk)
        car = car_q.first()
        if not car:
            raise NotFound("This car does not exist")

        car_q.update(car_data)
        db.session.add(car)
        db.session.commit()
        return car

    @staticmethod
    def delete(pk):
        car_q = CarModel.query.filter_by(pk=pk)
        car = car_q.first()
        if not car:
            raise NotFound("This car does not exist")

        db.session.delete(car)
        db.session.commit()
