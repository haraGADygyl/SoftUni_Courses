from werkzeug.exceptions import NotFound

from db import db
from models.car import CarModel


def query_car_by_pk(pk):
    car_q = CarModel.query.filter_by(pk=pk)
    car = car_q.first()
    if not car:
        raise NotFound("This car does not exist")
    return car_q


class CarManager:
    @staticmethod
    def get_all():
        return CarModel.query.all()

    @staticmethod
    def get(pk):
        car = query_car_by_pk(pk)
        return car.first()

    @staticmethod
    def create(car_data, user_pk):
        car_data["user_pk"] = user_pk
        car = CarModel(**car_data)
        db.session.add(car)
        db.session.commit()
        return car

    @staticmethod
    def update(car_data, pk):
        car = query_car_by_pk(pk)
        car.update(car_data)
        db.session.add(car.first())
        db.session.commit()
        return car.first()

    @staticmethod
    def delete(pk):
        car = query_car_by_pk(pk)
        db.session.delete(car.first())
        db.session.commit()
