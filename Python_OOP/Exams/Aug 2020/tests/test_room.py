from unittest import TestCase, main

from project.people.child import Child
from project.rooms.room import Room


class TestRoom(TestCase):
    def setUp(self) -> None:
        self.r = Room('Test', 100, 2)

    def test_init(self):
        self.assertEqual(self.r.family_name, 'Test')
        self.assertEqual(self.r.budget, 100)
        self.assertEqual(self.r.members_count, 2)
        self.assertEqual(self.r.children, [])
        self.assertEqual(self.r.expenses, 0)

    def test_expenses_negative_raises(self):
        with self.assertRaises(ValueError) as e:
            self.r.expenses = -1
        self.assertEqual(str(e.exception), 'Expenses cannot be negative')

    def test_expenses(self):
        self.r.expenses = 1
        self.assertEqual(self.r.expenses, 1)

    def test_calculate_expenses(self):
        c1 = Child(5, 4, 1)
        self.r.calculate_expenses([c1])
        self.assertEqual(self.r.expenses, 300)


if __name__ == '__main__':
    main()
