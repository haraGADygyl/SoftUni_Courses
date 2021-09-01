from project.animals.animal import Mammal
from project.food import Vegetable, Fruit, Meat, Seed
# from animals.animal import Mammal
# from food import Vegetable, Fruit, Meat


class Mouse(Mammal):
    def make_sound(self):
        return 'Squeak'

    def feed(self, food):
        if type(food) != Vegetable and type(food) != Fruit:
            return f'{type(self).__name__} does not eat {type(food).__name__}!'
        self.weight += food.quantity * 0.1
        self.food_eaten += food.quantity


class Dog(Mammal):
    def make_sound(self):
        return 'Woof!'

    def feed(self, food):
        if type(food) != Meat:
            return f'{type(self).__name__} does not eat {type(food).__name__}!'
        self.weight += food.quantity * 0.4
        self.food_eaten += food.quantity


class Cat(Mammal):
    def make_sound(self):
        return 'Meow'

    def feed(self, food):
        if type(food) != Meat and type(food) != Vegetable:
            return f'{type(self).__name__} does not eat {type(food).__name__}!'
        self.weight += food.quantity * 0.3
        self.food_eaten += food.quantity


class Tiger(Mammal):
    def make_sound(self):
        return 'ROAR!!!'

    def feed(self, food):
        if type(food) != Meat:
            return f'{type(self).__name__} does not eat {type(food).__name__}!'
        self.weight += food.quantity
        self.food_eaten += food.quantity
