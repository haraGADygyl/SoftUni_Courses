from unittest import TestCase, main

from project.player.beginner import Beginner

INITIAL_HEALTH = 50


class TestAdvanced(TestCase):
    def test_init_empty_name_raises(self):
        with self.assertRaises(ValueError) as ex:
            Beginner('')
        self.assertEqual(str(ex.exception), 'Player\'s username cannot be an empty string.')

    def test_init(self):
        a = Beginner('Test')
        self.assertEqual(a.username, 'Test')

    def test_init_health(self):
        a = Beginner('Test')
        self.assertEqual(a.health, INITIAL_HEALTH)

    def test_init_health_negative_raises(self):
        a = Beginner('Test')
        with self.assertRaises(ValueError) as ex:
            a.health = -1
        self.assertEqual(str(ex.exception), 'Player\'s health bonus cannot be less than zero.')

    def test_is_dead(self):
        a = Beginner('Test')
        self.assertEqual(a.health, INITIAL_HEALTH)
        self.assertFalse(a.is_dead)
        a.health = 0
        self.assertTrue(a.is_dead)

    def test_take_damage_negative_points_raises(self):
        a = Beginner('Test')
        with self.assertRaises(ValueError) as ex:
            a.take_damage(-1)
        self.assertEqual(str(ex.exception), 'Damage points cannot be less than zero.')

    def test_take_damage_(self):
        a = Beginner('Test')
        a.take_damage(10)
        self.assertEqual(a.health, 40)


if __name__ == '__main__':
    main()
