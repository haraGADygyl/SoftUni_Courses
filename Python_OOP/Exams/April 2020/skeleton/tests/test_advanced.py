from unittest import TestCase, main

from project.player.advanced import Advanced

INITIAL_HEALTH = 250


class TestAdvanced(TestCase):
    def test_init_empty_name_raises(self):
        with self.assertRaises(ValueError) as ex:
            Advanced('')
        self.assertEqual(str(ex.exception), 'Player\'s username cannot be an empty string.')

    def test_init(self):
        a = Advanced('Test')
        self.assertEqual(a.username, 'Test')

    def test_init_health(self):
        a = Advanced('Test')
        self.assertEqual(a.health, INITIAL_HEALTH)

    def test_init_health_negative_raises(self):
        a = Advanced('Test')
        with self.assertRaises(ValueError) as ex:
            a.health = -1
        self.assertEqual(str(ex.exception), 'Player\'s health bonus cannot be less than zero.')

    def test_is_dead(self):
        a = Advanced('Test')
        self.assertEqual(a.health, INITIAL_HEALTH)
        self.assertFalse(a.is_dead)
        a.health = 0
        self.assertTrue(a.is_dead)

    def test_take_damage_negative_points_raises(self):
        a = Advanced('Test')
        with self.assertRaises(ValueError) as ex:
            a.take_damage(-1)
        self.assertEqual(str(ex.exception), 'Damage points cannot be less than zero.')

    def test_take_damage_(self):
        a = Advanced('Test')
        a.take_damage(10)
        self.assertEqual(a.health, 240)


if __name__ == '__main__':
    main()
