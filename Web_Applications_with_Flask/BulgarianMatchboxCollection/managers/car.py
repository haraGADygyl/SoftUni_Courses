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
