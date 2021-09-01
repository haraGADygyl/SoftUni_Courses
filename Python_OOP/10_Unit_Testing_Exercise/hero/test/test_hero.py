from unittest import TestCase, main

# from hero import Hero
from project.hero import Hero


class TestHero(TestCase):
    def setUp(self) -> None:
        self.h = Hero('Jorko', 10, 20, 30)
        self.h2 = Hero('Borko', 10, 20, 30)
        self.h10 = Hero('Porko', 100, 2000, 3000)

    def test_init(self):
        self.assertEqual(self.h.username, 'Jorko')
        self.assertEqual(self.h.level, 10)
        self.assertEqual(self.h.health, 20)
        self.assertEqual(self.h.damage, 30)

    def test_battle_cannot_fight_yourself(self):
        with self.assertRaises(Exception) as e:
            self.h.battle(self.h)
        self.assertEqual(str(e.exception), 'You cannot fight yourself')

    def test_battle_negative_health(self):
        self.h.health = -1
        with self.assertRaises(ValueError) as e:
            self.h.battle(self.h2)
        self.assertEqual(str(e.exception), 'Your health is lower than or equal to 0. You need to rest')

    def test_battle_enemy_negative_health(self):
        self.h2.health = -1
        with self.assertRaises(ValueError) as e:
            self.h.battle(self.h2)
        self.assertEqual(str(e.exception), 'You cannot fight Borko. He needs to rest')

    def test_battle_draw(self):
        self.h.health = 10
        self.h2.health = 10
        result = self.h.battle(self.h2)
        self.assertEqual(result, 'Draw')

    def test_battle_you_win(self):
        result = self.h10.battle(self.h)
        self.assertEqual(result, 'You win')
        self.assertEqual(self.h10.level, 101)
        self.assertEqual(self.h10.health, 1705)
        self.assertEqual(self.h10.damage, 3005)

    def test_battle_you_lose(self):
        result = self.h.battle(self.h10)
        self.assertEqual(result, 'You lose')
        self.assertEqual(self.h10.level, 101)
        self.assertEqual(self.h10.health, 1705)
        self.assertEqual(self.h10.damage, 3005)

    def test_str(self):
        result = self.h.__str__()
        self.assertEqual(result, f"Hero {self.h.username}: {self.h.level} lvl\n"
                                 f"Health: {self.h.health}\n"
                                 f"Damage: {self.h.damage}\n")


if __name__ == '__main__':
    main()
