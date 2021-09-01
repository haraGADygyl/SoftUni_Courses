# from project.appliances.tv import TV
# from project.appliances.fridge import Fridge
# from project.appliances.laptop import Laptop
# from project.rooms.room import Room
#
#
# class YoungCoupleWithChildren(Room):
#     def __init__(self, family_name, salary_one, salary_two, *children):
#         people_count = 2 + len(children)
#         super().__init__(family_name, salary_one + salary_two, people_count)
#         self.room_cost = 30
#         self.appliances = [TV(), Fridge(), Laptop()] * people_count
#         self.children = list(children)
#         self.calculate_expenses(self.appliances, self.children)
from project.appliances.fridge import Fridge
from project.appliances.laptop import Laptop
from project.appliances.tv import TV
from project.rooms.room import Room


class YoungCoupleWithChildren(Room):
    default_members_count = 2
    room_cost = 30

    def __init__(self, family_name: str, salary_one: float, salary_two: float, *children):
        members_count = self.default_members_count + len(children)
        super().__init__(family_name, salary_one + salary_two, members_count)
        self.children = list(children)
        self.appliances = self.__generate_appliances()
        self.calculate_expenses(self.appliances, self.children)

    def __generate_appliances(self):
        result = []
        for i in range(self.members_count):
            result.append(TV())
            result.append(Fridge())
            result.append(Laptop())
        return result
