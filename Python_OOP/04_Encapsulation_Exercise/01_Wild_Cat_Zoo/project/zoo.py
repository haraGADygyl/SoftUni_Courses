class Zoo:
    def __init__(self, name, budget, animal_capacity, workers_capacity):
        self.name = name
        self.__budget = budget
        self.__animal_capacity = animal_capacity
        self.__workers_capacity = workers_capacity
        self.animals = []
        self.workers = []

    def add_animal(self, animal, price):
        if self.__budget >= price and self.__animal_capacity > len(self.animals):
            self.animals.append(animal)
            self.__budget -= price
            return f'{animal.name} the {type(animal).__name__} added to the zoo'

        if self.__budget < price and self.__animal_capacity > len(self.animals):
            return 'Not enough budget'

        return 'Not enough space for animal'

    def hire_worker(self, worker):
        if len(self.workers) < self.__workers_capacity:
            self.workers.append(worker)
            return f'{worker.name} the {type(worker).__name__} hired successfully'
        return 'Not enough space for worker'

    def fire_worker(self, worker_name):
        for w in self.workers:
            if w.name == worker_name:
                self.workers.remove(w)
                return f'{worker_name} fired successfully'
        return f'There is no {worker_name} in the zoo'

    def pay_workers(self):
        total_salary = 0
        for w in self.workers:
            total_salary += w.salary

        if self.__budget >= total_salary:
            self.__budget -= total_salary
            return f'You payed your workers. They are happy. Budget left: {self.__budget}'
        return f'You have no budget to pay your workers. They are unhappy'

    def tend_animals(self):
        total_tend = 0
        for a in self.animals:
            total_tend += a.money_for_care

        if self.__budget >= total_tend:
            self.__budget -= total_tend
            return f'You tended all the animals. They are happy. Budget left: {self.__budget}'
        return 'You have no budget to tend the animals. They are unhappy.'

    def profit(self, amount):
        self.__budget += amount

    def animals_status(self):
        lions = 0
        tigers = 0
        cheetahs = 0
        lions_list = ''
        tigers_list = ''
        cheetahs_list = ''

        for a in self.animals:
            if type(a).__name__ == 'Lion':
                lions += 1
                lions_list += repr(a) + '\n'
            if type(a).__name__ == 'Tiger':
                tigers += 1
                tigers_list += repr(a) + '\n'
            if type(a).__name__ == 'Cheetah':
                cheetahs += 1
                cheetahs_list += repr(a) + '\n'

        result = f'You have {len(self.animals)} animals\n'
        result += f'----- {lions} Lions:\n'
        result += lions_list
        result += f'----- {tigers} Tigers:\n'
        result += tigers_list
        result += f'----- {cheetahs} Cheetahs:\n'
        result += cheetahs_list.strip()

        return result

    def workers_status(self):
        keepers = 0
        caretakers = 0
        vets = 0
        keepers_list = []
        caretakers_list = []
        vets_list = []

        for w in self.workers:
            if type(w).__name__ == 'Keeper':
                keepers += 1
                keepers_list.append(w)
            if type(w).__name__ == 'Caretaker':
                caretakers += 1
                caretakers_list.append(w)
            if type(w).__name__ == 'Vet':
                vets += 1
                vets_list.append(w)

        result = f'You have {len(self.workers)} workers\n'
        result += f'----- {keepers} Keepers:\n'
        result += '\n'.join(repr(k) for k in keepers_list) + '\n'
        result += f'----- {caretakers} Caretakers:\n'
        result += '\n'.join(repr(c) for c in caretakers_list) + '\n'
        result += f'----- {vets} Vets:\n'
        result += '\n'.join(repr(v) for v in vets_list)

        return result
