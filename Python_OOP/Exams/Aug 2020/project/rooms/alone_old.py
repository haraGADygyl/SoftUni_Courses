# from project.rooms.room import Room
#
#
# class AloneOld(Room):
#     def __init__(self, family_name, pension):
#         super().__init__(family_name, pension, 1)
#         self.room_cost = 10
#         self.appliances = []
from project.rooms.room import Room


class AloneOld(Room):
    default_members_count = 1
    room_cost = 10

    def __init__(self, family_name: str, pension: float):
        super().__init__(family_name, pension, self.default_members_count)
