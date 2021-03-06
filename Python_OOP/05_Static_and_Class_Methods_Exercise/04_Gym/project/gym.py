class Gym:
    def __init__(self):
        self.customers = []
        self.trainers = []
        self.equipment = []
        self.plans = []
        self.subscriptions = []

    def add_customer(self, customer):
        if customer not in self.customers:
            self.customers.append(customer)

    def add_trainer(self, trainer):
        if trainer not in self.trainers:
            self.trainers.append(trainer)

    def add_equipment(self, equipment):
        if equipment not in self.equipment:
            self.equipment.append(equipment)

    def add_plan(self, plan):
        if plan not in self.plans:
            self.plans.append(plan)

    def add_subscription(self, subscription):
        if subscription not in self.subscriptions:
            self.subscriptions.append(subscription)

    def subscription_info(self, subscription_id):
        result = f'{[repr(s) for s in self.subscriptions if s.id == subscription_id][0]}\n'
        result += f'{[repr(c) for c in self.customers if c.id == subscription_id][0]}\n'
        result += f'{[repr(t) for t in self.trainers if t.id == subscription_id][0]}\n'
        result += f'{[repr(e) for e in self.equipment if e.id == subscription_id][0]}\n'
        result += f'{[repr(p) for p in self.plans if p.id == subscription_id][0]}\n'
        return result
