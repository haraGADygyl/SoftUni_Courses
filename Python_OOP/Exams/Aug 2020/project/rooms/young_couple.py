# from project.appliances.tv import TV
# from project.appliances.fridge import Fridge
# from project.appliances.laptop import Laptop
# from project.rooms.room import Room
#
#
# class YoungCouple(Room):
#     def __init__(self, family_name, salary_one, salary_two):
#         super().__init__(family_name, salary_one + salary_two, 2)
#         self.room_cost = 20
#         self.appliances = [TV(), Fridge(), Laptop()] * 2
#         self.calculate_expenses(self.appliances)
from project.appliances.fridge import Fridge
from project.appliances.laptop import Laptop
from project.appliances.tv import TV
from project.rooms.room import Room


class YoungCouple(Room):
    default_members_count = 2
    room_cost = 20
    appliances = [TV(), TV(), Fridge(), Fridge(), Laptop(), Laptop()]

    def __init__(self, family_name: str, salary_one: float, salary_two: float):
        super().__init__(family_name, salary_one + salary_two, self.default_members_count)
        self.calculate_expenses(self.appliances)
