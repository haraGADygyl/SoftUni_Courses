from unittest import TestCase, main

from project.hardware.hardware import Hardware
from project.software.light_software import LightSoftware


class TestHardware(TestCase):
    def setUp(self) -> None:
        self.h = Hardware('Test', 'Light', 100, 100)
        self.ls = LightSoftware('TestSoftware', 50, 50)

    def test_init(self):
        self.assertEqual(self.h.name, 'Test')
        self.assertEqual(self.h.type, 'Light')
        self.assertEqual(self.h.capacity, 100)
        self.assertEqual(self.h.memory, 100)
        self.assertEqual(self.h.software_components, [])

    def test_install_cannot_install_software_raises(self):
        with self.assertRaises(Exception) as ex:
            self.h.install(LightSoftware('TestSoftware', 500, 500))
        self.assertEqual(str(ex.exception), 'Software cannot be installed')

    def test_install(self):
        self.assertEqual(len(self.h.software_components), 0)
        self.h.install(LightSoftware('TestSoftware', 50, 50))
        self.assertEqual(len(self.h.software_components), 1)

    def test_uninstall(self):
        self.assertEqual(len(self.h.software_components), 0)
        self.h.install(self.ls)
        self.assertEqual(len(self.h.software_components), 1)
        self.h.uninstall(self.ls)
        self.assertEqual(len(self.h.software_components), 0)


if __name__ == '__main__':
    main()
