class Car:
    def __init__(self, make, model, fuel_consumption, fuel_capacity):
        self.make = make
        self.model = model
        self.fuel_consumption = fuel_consumption
        self.fuel_capacity = fuel_capacity
        self.fuel_amount = 0

    @property
    def make(self):
        return self.__make

    @make.setter
    def make(self, new_value):
        if not new_value:
            raise Exception("Make cannot be null or empty!")
        self.__make = new_value

    @property
    def model(self):
        return self.__model

    @model.setter
    def model(self, new_value):
        if not new_value:
            raise Exception("Model cannot be null or empty!")
        self.__model = new_value

    @property
    def fuel_consumption(self):
        return self.__fuel_consumption

    @fuel_consumption.setter
    def fuel_consumption(self, new_value):
        if new_value <= 0:
            raise Exception("Fuel consumption cannot be zero or negative!")
        self.__fuel_consumption = new_value

    @property
    def fuel_capacity(self):
        return self.__fuel_capacity

    @fuel_capacity.setter
    def fuel_capacity(self, new_value):
        if new_value <= 0:
            raise Exception("Fuel capacity cannot be zero or negative!")
        self.__fuel_capacity = new_value

    @property
    def fuel_amount(self):
        return self.__fuel_amount

    @fuel_amount.setter
    def fuel_amount(self, new_value):
        if new_value < 0:
            raise Exception("Fuel amount cannot be negative!")
        self.__fuel_amount = new_value

    def refuel(self, fuel):
        if fuel <= 0:
            raise Exception("Fuel amount cannot be zero or negative!")
        self.__fuel_amount += fuel
        if self.__fuel_amount > self.__fuel_capacity:
            self.__fuel_amount = self.__fuel_capacity

    def drive(self, distance):
        needed = (distance / 100) * self.__fuel_consumption

        if needed > self.__fuel_amount:
            raise Exception("You don't have enough fuel to drive!")

        self.__fuel_amount -= needed


from unittest import TestCase, main


class TestCar(TestCase):
    def setUp(self) -> None:
        self.c = Car('Mazda', 'Tribute', 10, 100)

    def test_init(self):
        self.assertEqual(self.c.make, 'Mazda')
        self.assertEqual(self.c.model, 'Tribute')
        self.assertEqual(self.c.fuel_consumption, 10)
        self.assertEqual(self.c.fuel_capacity, 100)
        self.assertEqual(self.c.fuel_amount, 0)

    def test_make(self):
        self.c.make = 'Ford'
        self.assertEqual(self.c.make, 'Ford')

    def test_make_empty_string_exception(self):
        with self.assertRaises(Exception) as e:
            self.c.make = ''
        self.assertEqual(str(e.exception), 'Make cannot be null or empty!')

    def test_model(self):
        self.c.model = '6'
        self.assertEqual(self.c.model, '6')

    def test_model_empty_string_exception(self):
        with self.assertRaises(Exception) as e:
            self.c.model = ''
        self.assertEqual(str(e.exception), 'Model cannot be null or empty!')

    def test_fuel_consumption(self):
        self.c.fuel_consumption = 4
        self.assertEqual(self.c.fuel_consumption, 4)

    def test_fuel_consumption_negative_exception(self):
        with self.assertRaises(Exception) as e:
            self.c.fuel_consumption = -1
        self.assertEqual(str(e.exception), 'Fuel consumption cannot be zero or negative!')

    def test_fuel_capacity(self):
        self.c.fuel_capacity = 4
        self.assertEqual(self.c.fuel_capacity, 4)

    def test_fuel_capacity_negative_exception(self):
        with self.assertRaises(Exception) as e:
            self.c.fuel_capacity = -1
        self.assertEqual(str(e.exception), 'Fuel capacity cannot be zero or negative!')

    def test_fuel_amount(self):
        self.c.fuel_amount = 4
        self.assertEqual(self.c.fuel_amount, 4)

    def test_fuel_amount_negative_exception(self):
        with self.assertRaises(Exception) as e:
            self.c.fuel_amount = -1
        self.assertEqual(str(e.exception), 'Fuel amount cannot be negative!')

    def test_refuel(self):
        self.c.refuel(15)
        self.assertEqual(self.c.fuel_amount, 15)

    def test_refuel_more_than_fuel_capacity(self):
        self.c.refuel(150)
        self.assertEqual(self.c.fuel_amount, 100)

    def test_refuel_negative_exception(self):
        with self.assertRaises(Exception) as e:
            self.c.refuel(-1)
        self.assertEqual(str(e.exception), 'Fuel amount cannot be zero or negative!')

    def test_drive(self):
        self.c.fuel_amount = 50
        self.c.drive(100)
        self.assertEqual(self.c.fuel_amount, 40)

    def test_drive_not_enough_fuel_exception(self):
        with self.assertRaises(Exception) as e:
            self.c.drive(10000)
        self.assertEqual(str(e.exception), 'You don\'t have enough fuel to drive!')


if __name__ == '__main__':
    main()
