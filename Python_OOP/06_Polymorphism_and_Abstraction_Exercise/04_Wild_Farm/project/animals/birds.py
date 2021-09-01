# from food import Meat
# from animals.animal import Bird
from project.animals.animal import Bird
from project.food import Vegetable, Fruit, Meat, Seed


class Owl(Bird):
    def make_sound(self):
        return 'Hoot Hoot'

    def feed(self, food):
        if type(food) != Meat:
            return f'{type(self).__name__} does not eat {type(food).__name__}!'
        self.weight += food.quantity * 0.25
        self.food_eaten += food.quantity


class Hen(Bird):
    def make_sound(self):
        return 'Cluck'

    def feed(self, food):
        self.weight += food.quantity * 0.35
        self.food_eaten += food.quantity
