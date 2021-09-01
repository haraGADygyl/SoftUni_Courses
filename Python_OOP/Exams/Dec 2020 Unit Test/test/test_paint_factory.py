from unittest import TestCase, main

from project.factory.paint_factory import PaintFactory


class TestPaintFactory(TestCase):
    def setUp(self) -> None:
        self.p = PaintFactory('Test', 100)

    def test_init(self):
        self.assertEqual(self.p.name, 'Test')
        self.assertEqual(self.p.capacity, 100)
        self.assertEqual(self.p.ingredients, {})
        self.assertEqual(self.p.valid_ingredients, ["white", "yellow", "blue", "green", "red"])

    def test_add_ingredient_invalid_ingredient_raises(self):
        with self.assertRaises(TypeError) as ex:
            self.p.add_ingredient('black', 1)
        self.assertEqual(str(ex.exception), 'Ingredient of type black not allowed in PaintFactory')

    def test_add_ingredients_not_enough_space_raises(self):
        with self.assertRaises(ValueError) as ex:
            self.p.add_ingredient('white', 101)
        self.assertEqual(str(ex.exception), 'Not enough space in factory')

    def test_add_ingredients_product_not_in_ingredients(self):
        self.p.add_ingredient('white', 20)
        self.assertEqual(self.p.ingredients, {'white': 20})

    def test_add_ingredients_product_in_ingredients(self):
        self.p.ingredients = {'white': 20}
        self.p.add_ingredient('white', 20)
        self.assertEqual(self.p.ingredients, {'white': 40})

    def test_remove_ingredients_invalid_ingredient_raises(self):
        with self.assertRaises(KeyError) as ex:
            self.p.remove_ingredient('white', 1)
        self.assertEqual(str(ex.exception), "'No such ingredient in the factory'")

    def test_remove_ingredients_negative_quantity_raises(self):
        self.p.ingredients = {'white': 20}
        with self.assertRaises(ValueError) as ex:
            self.p.remove_ingredient('white', 21)
        self.assertEqual(str(ex.exception), 'Ingredients quantity cannot be less than zero')

    def test_remove_ingredients(self):
        self.p.ingredients = {'white': 20}
        self.p.remove_ingredient('white', 5)
        self.assertEqual(self.p.ingredients, {'white': 15})

    def test_property_products(self):
        self.p.add_ingredient('white', 2)
        self.assertEqual(self.p.products, {'white': 2})


if __name__ == '__main__':
    main()
