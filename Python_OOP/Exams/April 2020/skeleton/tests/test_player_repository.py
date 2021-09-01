from unittest import TestCase, main

from project.player.advanced import Advanced
from project.player.player_repository import PlayerRepository


class TestPlayerRepository(TestCase):
    def setUp(self) -> None:
        self.p = PlayerRepository()

    def test_init(self):
        self.assertEqual(self.p.count, 0)
        self.assertEqual(self.p.players, [])

    def test_add_player_already_exists_raises(self):
        player = Advanced('Test')
        self.p.players = [player]
        with self.assertRaises(ValueError) as ex:
            self.p.add(player)
        self.assertEqual(str(ex.exception), 'Player Test already exists!')


    def test_add(self):
        player = Advanced('Test')
        self.p.add(player)
        self.assertEqual(len(self.p.players), 1)
        self.assertEqual(self.p.players, [player])

    def test_remove_empty_string_raises(self):
        with self.assertRaises(ValueError) as ex:
            self.p.remove('')
        self.assertEqual(str(ex.exception), 'Player cannot be an empty string!')

    def test_remove(self):
        a = Advanced('Test')
        self.p.count = 1
        self.p.players = [a]
        self.p.remove(a.username)
        self.assertEqual(self.p.players, [])
        self.assertEqual(self.p.count, 0)

    def test_find(self):
        a = Advanced('Test')
        self.p.count = 1
        self.p.players = [a]
        result = self.p.find('Test')
        self.assertEqual(result.username, a.username)
        self.assertEqual(result, a)



if __name__ == '__main__':
    main()