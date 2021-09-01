from unittest import TestCase, main

from project.card.magic_card import MagicCard

DAMAGE_POINTS = 5
HEALTH_POINTS = 80


class TestMagicCard(TestCase):
    def setUp(self) -> None:
        self.m = MagicCard('Test')

    def test_init(self):
        self.assertEqual(self.m.name, 'Test')
        self.assertEqual(self.m.damage_points, DAMAGE_POINTS)
        self.assertEqual(self.m.health_points, HEALTH_POINTS)

    def test_name_empty_string_raises(self):
        with self.assertRaises(ValueError) as ex:
            MagicCard('')
        self.assertEqual(str(ex.exception), 'Card\'s name cannot be an empty string.')

    def test_name_(self):
        self.assertEqual(self.m.name, 'Test')

    def test_damage_points_negative_raises(self):
        with self.assertRaises(ValueError) as ex:
            self.m.damage_points = -1
        self.assertEqual(str(ex.exception), 'Card\'s damage points cannot be less than zero.')

    def test_damage_points(self):
        self.assertEqual(self.m.damage_points, DAMAGE_POINTS)
        self.m.damage_points = 10
        self.assertEqual(self.m.damage_points, 10)

    def test_health_points_negative_raises(self):
        with self.assertRaises(ValueError) as ex:
            self.m.health_points = -1
        self.assertEqual(str(ex.exception), 'Card\'s HP cannot be less than zero.')

    def test_health_points(self):
        self.assertEqual(self.m.health_points, HEALTH_POINTS)
        self.m.health_points = 10
        self.assertEqual(self.m.health_points, 10)


if __name__ == '__main__':
    main()