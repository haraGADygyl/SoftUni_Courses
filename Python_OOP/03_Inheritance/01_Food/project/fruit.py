# from food import Food
from project.food import Food


class Fruit(Food):
    def __init__(self, name, expiration_date):
        super().__init__(expiration_date)
        self.name = name


a = Fruit('banana', '2020-9')
print(a.expiration_date)
