from unittest import TestCase, main

from project.battle_field import BattleField
from project.card.trap_card import TrapCard
from project.controller import Controller
from project.player.advanced import Advanced
from project.player.beginner import Beginner
from project.player.player import Player


class TestController(TestCase):
    def test_init(self):
        c = Controller()
        self.assertEqual(len(c.player_repository.players), 0)
        self.assertEqual(len(c.card_repository.cards), 0)

    def test_add_player(self):
        c = Controller()
        result_1 = c.add_player('Beginner', 'testbeginner')
        result_2 = c.add_player('Advanced', 'testadvanced')
        self.assertEqual(result_1, 'Successfully added player of type Beginner with username: testbeginner')
        self.assertEqual(result_2, 'Successfully added player of type Advanced with username: testadvanced')

    def test_add_card(self):
        c = Controller()
        result_1 = c.add_card('MagicCard', 'testMagicCard')
        result_2 = c.add_card('TrapCard', 'testTrapCard')
        self.assertEqual(result_1, 'Successfully added card of type MagicCard Card with name: testMagicCard')
        self.assertEqual(result_2, 'Successfully added card of type TrapCard Card with name: testTrapCard')

    def test_add_player_card(self):
        c = Controller()
        c.add_player('Beginner', 'testbeginner')
        c.add_card('MagicCard', 'testMagicCard')
        result = c.add_player_card('testbeginner', 'testMagicCard')
        self.assertEqual(result, 'Successfully added card: testMagicCard to user: testbeginner')

    def test_fight(self):
        attacker = Advanced('TestA')
        enemy = Beginner("TestE")
        c = Controller()
        c.player_repository.add(attacker)
        c.player_repository.add(enemy)
        result = c.fight('TestA', 'TestE')
        self.assertEqual(result, 'Attack user health 250 - Enemy user health 90')

    def test_report(self):
        attacker = Advanced('TestA')
        enemy = Beginner("TestE")
        c = Controller()
        c.player_repository.add(attacker)
        c.player_repository.add(enemy)
        result = c.report()
        self.assertEqual(result, 'Username: TestA - Health: 250 - Cards 0\nUsername: TestE - Health: 50 - Cards 0')







if __name__ == '__main__':
    main()