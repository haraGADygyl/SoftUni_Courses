from unittest import TestCase, main

from project.battle_field import BattleField
from project.card.trap_card import TrapCard
from project.player.advanced import Advanced
from project.player.beginner import Beginner


class TestBattleField(TestCase):
    def setUp(self) -> None:
        self.p1 = Beginner('Test')
        self.p2 = Beginner('Test2')

    def test_fight_attacker_is_dead_raises(self):
        self.p1.health = 0
        with self.assertRaises(ValueError) as ex:
            BattleField.fight(self.p1, self.p2)
        self.assertEqual(str(ex.exception), 'Player is dead!')

    def test_fight_enemy_is_dead_raises(self):
        self.p2.health = 0
        with self.assertRaises(ValueError) as ex:
            BattleField.fight(self.p1, self.p2)
        self.assertEqual(str(ex.exception), 'Player is dead!')

    def test_players_health_is_increased(self):
        attacker = Advanced('TestA')
        enemy = Advanced("TestE")
        card = TrapCard('TestCard')
        attacker.card_repository.add(card)
        enemy.card_repository.add(card)
        self.assertEqual(attacker.health, 250)
        self.assertEqual(enemy.health, 250)
        BattleField.fight(attacker, enemy)
        self.assertEqual(attacker.health, 135)
        self.assertEqual(enemy.health, 135)

    def test_enemy_dies_in_battle(self):
        attacker = Advanced('TestA')
        enemy = Beginner("TestE")
        card = TrapCard('TestCard')
        card_2 = TrapCard('TestCard2')
        attacker.card_repository.add(card)
        attacker.card_repository.add(card_2)
        enemy.card_repository.add(card)
        self.assertEqual(attacker.health, 250)
        self.assertEqual(enemy.health, 50)
        enemy.health += 175
        BattleField.fight(attacker, enemy)
        self.assertEqual(attacker.health, 110)
        self.assertEqual(enemy.health, 0)
        self.assertFalse(attacker.is_dead)
        self.assertTrue(enemy.is_dead)


if __name__ == '__main__':
    main()
