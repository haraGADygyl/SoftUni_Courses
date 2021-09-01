from unittest import TestCase, main

from project.card.card_repository import CardRepository
from project.card.magic_card import MagicCard


class TestCardRepository(TestCase):
    def setUp(self) -> None:
        self.c = CardRepository()

    def test_init(self):
        self.assertEqual(self.c.count, 0)
        self.assertEqual(self.c.cards, [])

    def test_add_player_already_exists_raises(self):
        card = MagicCard('Test')
        self.c.cards = [card]
        with self.assertRaises(ValueError) as ex:
            self.c.add(card)
        self.assertEqual(str(ex.exception), 'Card Test already exists!')

    def test_add(self):
        card = MagicCard('Test')
        self.c.add(card)
        self.assertEqual(len(self.c.cards), 1)
        self.assertEqual(self.c.cards, [card])

    def test_remove_empty_string_raises(self):
        with self.assertRaises(ValueError) as ex:
            self.c.remove('')
        self.assertEqual(str(ex.exception), 'Card cannot be an empty string!')

    def test_remove(self):
        a = MagicCard('Test')
        self.c.count = 1
        self.c.cards = [a]
        self.c.remove(a.name)
        self.assertEqual(self.c.cards, [])
        self.assertEqual(self.c.count, 0)

    def test_find(self):
        a = MagicCard('Test')
        self.c.count = 1
        self.c.cards = [a]
        result = self.c.find('Test')
        self.assertEqual(result.name, a.name)
        self.assertEqual(result, a)


if __name__ == '__main__':
    main()
