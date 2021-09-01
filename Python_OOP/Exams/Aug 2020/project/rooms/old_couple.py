# from project.appliances.fridge import Fridge
# from project.appliances.stove import Stove
# from project.appliances.tv import TV
# from project.rooms.room import Room
#
#
# class OldCouple(Room):
#     def __init__(self, family_name, pension_one, pension_two):
#         super().__init__(family_name, pension_one + pension_two, 2)
#         self.room_cost = 15
#         self.appliances = [TV(), Fridge(), Stove()] * 2
#         self.calculate_expenses(self.appliances)
from project.appliances.fridge import Fridge
from project.appliances.stove import Stove
from project.appliances.tv import TV
from project.rooms.room import Room


class OldCouple(Room):
    default_members_count = 2
    room_cost = 15
    appliances = [TV(), TV(), Fridge(), Fridge(), Stove(), Stove()]

    def __init__(self, family_name: str, pension_one: float, pension_two: float):
        super().__init__(family_name, pension_one + pension_two, self.default_members_count)
        self.calculate_expenses(self.appliances)
