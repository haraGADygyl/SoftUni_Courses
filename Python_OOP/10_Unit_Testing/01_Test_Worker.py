class Worker:

    def __init__(self, name, salary, energy):
        self.name = name
        self.salary = salary
        self.energy = energy
        self.money = 0

    def work(self):
        if self.energy <= 0:
            raise Exception('Not enough energy.')

        self.money += self.salary
        self.energy -= 1

    def rest(self):
        self.energy += 1

    def get_info(self):
        return f'{self.name} has saved {self.money} money.'


from unittest import TestCase, main


class WorkerTests(TestCase):
    def setUp(self) -> None:
        self.worker = Worker('Jorko', 100, 10)

    def test_worker_init(self):
        self.assertEqual(self.worker.name, 'Jorko')
        self.assertEqual(self.worker.salary, 100)
        self.assertEqual(self.worker.energy, 10)
        self.assertEqual(self.worker.money, 0)

    def test_worker_energy_increase_after_rest(self):
        self.worker.rest()
        self.assertEqual(self.worker.energy, 11)

    def test_worker_energy_is_negative_exception(self):
        worker = Worker('Jorko', 100, -1)
        with self.assertRaises(Exception) as e:
            worker.work()
        self.assertEqual(str(e.exception), 'Not enough energy.')

    def test_worker_money_is_increased_after_work(self):
        self.assertEqual(self.worker.money, 0)
        self.worker.work()
        self.assertEqual(self.worker.money, 100)

    def test_worker_energy_decreased_after_work(self):
        self.assertEqual(self.worker.energy, 10)
        self.worker.work()
        self.assertEqual(self.worker.energy, 9)

    def test_get_info_returns_correct_values(self):
        result = self.worker.get_info()
        self.assertEqual(result, 'Jorko has saved 0 money.')


if __name__ == '__main__':
    main()
