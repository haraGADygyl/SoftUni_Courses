# class Everland:
#     def __init__(self):
#         self.rooms = []
#
#     def add_room(self, room):
#         self.rooms.append(room)
#
#     def get_monthly_consumptions(self):
#         total_consumption = 0
#         for r in self.rooms:
#             total_consumption += r.expenses + r.room_cost
#         return f'Monthly consumptions: {total_consumption:.2f}$.'
#
#     def pay(self):
#         result = []
#         rooms_to_remove = []
#         for r in self.rooms:
#             if r.budget >= r.expenses + r.room_cost:
#                 r.budget -= r.expenses + r.room_cost
#                 result.append(f'{r.family_name} paid {r.expenses + r.room_cost:.2f}$ and have {r.budget:.2f}$ left.')
#             else:
#                 result.append(f'{r.family_name} does not have enough budget and must leave the hotel.')
#                 rooms_to_remove.append(r)
#
#         for r in rooms_to_remove:
#             self.rooms.remove(r)
#
#         return '\n'.join(result)
#
#     def status(self):
#         result = [f'Total population: {sum(p.members_count for p in self.rooms)}']
#
#         for r in self.rooms:
#             result.append(
#                 f'{r.family_name} with {r.members_count} members. '
#                 f'Budget: {r.budget:.2f}$, Expenses: {r.expenses:.2f}$')
#
#             if r.children:
#                 counter = 1
#                 for child in r.children:
#                     result.append(f'--- Child {counter} monthly cost: {child.get_monthly_expense():.2f}$')
#                     counter += 1
#
#             if hasattr(r, 'appliances'):
#                 appliances_expenses = 0
#                 for a in r.appliances:
#                     appliances_expenses += a.get_monthly_expense()
#                 result.append(f'--- Appliances monthly cost: {appliances_expenses:.2f}$')
#
#         return '\n'.join(result)
from project.rooms.room import Room


class Everland:
    def __init__(self):
        self.rooms = []

    def add_room(self, room: Room):
        self.rooms.append(room)

    def get_monthly_consumptions(self):
        total_consumption = sum(room.expenses + room.room_cost for room in self.rooms)
        return f'Monthly consumption: {total_consumption:.2f}$.'

    def pay(self):
        result = []
        rooms_to_remove = []
        for room in self.rooms:
            if room.budget >= room.expenses + room.room_cost:
                room.budget -= room.expenses + room.room_cost
                result.append(f'{room.family_name} paid {room.expenses+room.room_cost:.2f}$'
                              f' and have {room.budget:.2f}$ left.')
            else:
                rooms_to_remove.append(room)
                result.append(f'{room.family_name} does not have enough budget and must leave the hotel.')

        for room in rooms_to_remove:
            self.rooms.remove(room)

        return '\n'.join(result)

    def status(self):
        total_population = sum(room.members_count for room in self.rooms)
        result = [f'Total population: {total_population:.2f}']
        pass
    
