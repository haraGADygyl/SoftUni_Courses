class IntegerList:
    def __init__(self, *args):
        self.__data = []
        for x in args:
            if type(x) == int:
                self.__data.append(x)

    def get_data(self):
        return self.__data

    def add(self, element):
        if not type(element) == int:
            raise ValueError("Element is not Integer")
        self.get_data().append(element)
        return self.get_data()

    def remove_index(self, index):
        if index >= len(self.get_data()):
            raise IndexError("Index is out of range")
        a = self.get_data()[index]
        del self.get_data()[index]
        return a

    def get(self, index):
        if index >= len(self.get_data()):
            raise IndexError("Index is out of range")
        return self.get_data()[index]

    def insert(self, index, el):
        if index >= len(self.get_data()):
            raise IndexError("Index is out of range")
        elif not type(el) == int:
            raise ValueError("Element is not Integer")

        self.get_data().insert(index, el)

    def get_biggest(self):
        a = sorted(self.get_data(), reverse=True)
        return a[0]

    def get_index(self, el):
        return self.get_data().index(el)


from unittest import TestCase, main


class TestIntegerList(TestCase):
    def setUp(self) -> None:
        self.i = IntegerList(1, 2, 3)

    def test_init(self):
        self.assertEqual(self.i._IntegerList__data, [1, 2, 3])

    def test_init_takes_non_integers(self):
        self.i = IntegerList('1', 2.9)
        self.assertEqual(self.i._IntegerList__data, [])

    def test_add__adds_element_and_returns_list(self):
        result = self.i.add(4)
        self.assertEqual(result, [1, 2, 3, 4])

    def test_add_element_not_integer_exception(self):
        with self.assertRaises(ValueError) as e:
            self.i.add('1')
        self.assertEqual(str(e.exception), 'Element is not Integer')

    def test_remove_index_removes_element_return(self):
        result = self.i.remove_index(0)
        self.assertEqual(result, 1)

    def test_remove_index_index_out_of_range_exception(self):
        with self.assertRaises(IndexError) as e:
            self.i.remove_index(10)
        self.assertEqual(str(e.exception), 'Index is out of range')

    def test_get(self):
        result = self.i.get(0)
        self.assertEqual(result, 1)

    def test_get_index_out_of_range_exception(self):
        with self.assertRaises(IndexError) as e:
            self.i.get(4)
        self.assertEqual(str(e.exception), 'Index is out of range')

    def test_insert(self):
        self.i.insert(0, 100)
        self.assertEqual(self.i._IntegerList__data, [100, 1, 2, 3])

    def test_insert_index_out_of_range_exception(self):
        with self.assertRaises(IndexError) as e:
            self.i.insert(5, 5)
        self.assertEqual(str(e.exception), 'Index is out of range')

    def test_insert_element_not_integer_exception(self):
        with self.assertRaises(ValueError) as e:
            self.i.insert(0, 'a')
        self.assertEqual(str(e.exception), 'Element is not Integer')

    def test_get_biggest(self):
        result = self.i.get_biggest()
        self.assertEqual(result, 3)

    def test_get_index(self):
        result = self.i.get_index(1)
        self.assertEqual(result, 0)


if __name__ == '__main__':
    main()
