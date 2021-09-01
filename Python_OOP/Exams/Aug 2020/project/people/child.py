# class Child:
#     def __init__(self, food_cost, *toys_cost):
#         self.cost = food_cost + sum(toys_cost)
#
#     def get_monthly_expense(self):
#         return self.cost * 30

class Child:
    days_in_month = 30

    def __init__(self, food_cost: int, *toys_cost):
        self.food_cost = food_cost  # per day
        self.cost = food_cost + sum(toys_cost)

    def get_monthly_expense(self):
        return self.cost * self.days_in_month
