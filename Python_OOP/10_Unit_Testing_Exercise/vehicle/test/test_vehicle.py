from unittest import TestCase, main

from project.vehicle import Vehicle


class TestVehicle(TestCase):
    def setUp(self):
        self.v = Vehicle(10, 100)

    def test_init(self):
        self.assertEqual(self.v.fuel, 10)
        self.assertEqual(self.v.capacity, 10)
        self.assertEqual(self.v.horse_power, 100)
        self.assertEqual(self.v.fuel_consumption, 1.25)

    def test_drive(self):
        self.v.drive(4)
        self.assertEqual(self.v.fuel, 5)

    def test_drive_not_enough_fuel_exception(self):
        with self.assertRaises(Exception) as e:
            self.v.drive(10)
        self.assertEqual(str(e.exception), 'Not enough fuel')

    def test_refuel(self):
        self.v.drive(4)
        self.assertEqual(self.v.fuel, 5)
        self.v.refuel(1)
        self.assertEqual(self.v.fuel, 6)

    def test_refuel_too_much_fuel_exception(self):
        self.v.drive(4)
        self.assertAlmostEqual(self.v.fuel, 5)
        with self.assertRaises(Exception) as e:
            self.v.refuel(10)
        self.assertEqual(str(e.exception), 'Too much fuel')

    def test___str__(self):
        result = self.v.__str__()
        self.assertEqual(result, 'The vehicle has 100 horse power with 10 fuel left and 1.25 fuel consumption')


if __name__ == '__main__':
    main()
