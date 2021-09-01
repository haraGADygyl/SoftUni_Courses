# class Room:
#     def __init__(self, family_name, budget, members_count):
#         self.family_name = family_name
#         self.budget = budget
#         self.members_count = members_count
#         self.children = []
#         self.expenses = 0
#
#     @property
#     def expenses(self):
#         return self.__expenses
#
#     @expenses.setter
#     def expenses(self, value):
#         if value < 0:
#             raise ValueError('Expenses cannot be negative')
#         self.__expenses = value
#
#     def calculate_expenses(self, *args):
#         total_daily_cost = 0
#         for arg in args:
#             for element in arg:
#                 total_daily_cost += element.get_monthly_expense()
#         self.expenses = total_daily_cost

class Room:
    room_cost = 0

    def __init__(self, name: str, budget: float, members_count: int):
        self.family_name = name
        self.budget = budget
        self.members_count = members_count
        self.children = []
        self.expenses = 0

    @property
    def expenses(self):
        return self.__expenses

    @expenses.setter
    def expenses(self, value):
        if value < 0:
            raise ValueError('Expenses cannot be negative')
        self.__expenses = value

    def calculate_expenses(self, *args):
        result = 0
        for arg in args:
            for element in arg:
                result += element.get_monthly_expense()
        self.expenses = result
