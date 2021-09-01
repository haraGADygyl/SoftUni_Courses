from project.medicine.medicine import Medicine
from project.supply.supply import Supply
from project.survivor import Survivor


class Bunker:
    def __init__(self):
        self.survivors = []
        self.supplies = []
        self.medicine = []

    @property
    def food(self):
        food_supplies = [f for f in self.supplies if f.__class__.__name__ == 'FoodSupply']
        if not food_supplies:
            raise IndexError('There are no food supplies left!')
        return food_supplies

    @property
    def water(self):
        water_supplies = [w for w in self.supplies if w.__class__.__name__ == 'WaterSupply']
        if not water_supplies:
            raise IndexError('There are no water supplies left!')
        return water_supplies

    @property
    def painkillers(self):
        painkillers_list = [p for p in self.medicine if p.__class__.__name__ == 'Painkiller']
        if not painkillers_list:
            raise IndexError('There are no painkillers left!')
        return painkillers_list

    @property
    def salves(self):
        salves_list = [s for s in self.medicine if s.__class__.__name__ == 'Salve']
        if not salves_list:
            raise IndexError('There are no salves left!')
        return salves_list

    def add_survivor(self, survivor: Survivor):
        if survivor in self.survivors:
            raise ValueError(f'Survivor with name {survivor.name} already exists.')
        self.survivors.append(survivor)

    def add_supply(self, supply: Supply):
        self.supplies.append(supply)

    def add_medicine(self, medicine: Medicine):
        self.medicine.append(medicine)

    def heal(self, survivor: Survivor, medicine_type: str):
        last_medicine = [m for m in self.medicine if m.__class__.__name__ == medicine_type][-1]
        if survivor.needs_healing:
            self.medicine.remove(last_medicine)
            last_medicine.apply(survivor)
            return f'{survivor.name} healed successfully with {medicine_type}'

    def sustain(self, survivor: Survivor, sustenance_type: str):
        last_supply = [s for s in self.supplies if s.__class__.__name__ == sustenance_type][-1]
        if survivor.needs_sustenance:
            self.supplies.remove(last_supply)
            last_supply.apply(survivor)
            return f'{survivor.name} sustained successfully with {sustenance_type}'

    def next_day(self):
        for survivor in self.survivors:
            survivor.needs -= survivor.age * 2
            self.sustain(survivor, 'FoodSupply')
            self.sustain(survivor, 'WaterSupply')
