class Cat:

    def __init__(self, name):
        self.name = name
        self.fed = False
        self.sleepy = False
        self.size = 0

    def eat(self):
        if self.fed:
            raise Exception('Already fed.')

        self.fed = True
        self.sleepy = True
        self.size += 1

    def sleep(self):
        if not self.fed:
            raise Exception('Cannot sleep while hungry')

        self.sleepy = False


from unittest import TestCase, main

class CatTests(TestCase):
    def setUp(self) -> None:
        self.cat = Cat('Jorko')

    def test_init(self):
        self.assertEqual(self.cat.name, 'Jorko')
        self.assertFalse(self.cat.fed)
        self.assertFalse(self.cat.sleepy)
        self.assertEqual(self.cat.size, 0)

    def test_cat_size_increased_after_eating(self):
        self.assertEqual(self.cat.size, 0)
        self.cat.eat()
        self.assertEqual(self.cat.size, 1)

    def test_cat_is_fed_after_eating(self):
        self.assertFalse(self.cat.fed)
        self.cat.eat()
        self.assertTrue(self.cat.fed)

    def test_cat_cannot_eat_if_fed_exception(self):
        self.cat.fed = True
        with self.assertRaises(Exception) as e:
            self.cat.eat()
        self.assertEqual(str(e.exception), 'Already fed.')

    def test_cat_cannot_fall_asleep_if_not_fed_exception(self):
        self.assertFalse(self.cat.sleepy)
        with self.assertRaises(Exception) as e:
            self.cat.sleep()
        self.assertEqual(str(e.exception), 'Cannot sleep while hungry')

    def test_cat_is_not_sleepy_after_sleeping(self):
        self.cat.sleepy = True
        self.cat.fed = True
        self.cat.sleep()
        self.assertFalse(self.cat.sleepy)

if __name__ == '__main__':
    main()