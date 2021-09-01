# from project.appliances.tv import TV
# from project.rooms.room import Room
#
#
# class AloneYoung(Room):
#     def __init__(self, family_name, salary):
#         super().__init__(family_name, salary, 1)
#         self.room_cost = 10
#         self.appliances = [TV()]
#         self.calculate_expenses(self.appliances)
from project.appliances.tv import TV
from project.rooms.room import Room


class AloneYoung(Room):
    default_members_count = 1
    room_cost = 10
    appliances = [TV()]

    def __init__(self, family_name: str, salary: float):
        super().__init__(family_name, salary, self.default_members_count)
        self.calculate_expenses(self.appliances)
