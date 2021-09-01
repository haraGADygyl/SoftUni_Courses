from unittest import TestCase, main

# from student import Student
from project.student import Student


class TestStudent(TestCase):
    def setUp(self) -> None:
        self.s = Student('Jorko')

    def test_init(self):
        self.assertEqual(self.s.name, 'Jorko')
        self.assertEqual(self.s.courses, {})

    def test_init_with_course(self):
        s = Student('Jorko', {'Test': ['Python']})
        self.assertEqual(s.name, 'Jorko')
        self.assertEqual(s.courses, {'Test': ['Python']})

    def test_init_with_none(self):
        s = Student('Jorko', None)
        self.assertEqual(s.name, 'Jorko')
        self.assertEqual(s.courses, {})

    def test_enroll_course_already_added(self):
        self.s.courses = {'Python': ['note1']}
        result = self.s.enroll('Python', ['note2'])
        self.assertEqual(result, 'Course already added. Notes have been updated.')
        self.assertEqual(self.s.courses, {'Python': ['note1', 'note2']})

    def test_enroll_adding_course_and_notes(self):
        result = self.s.enroll('Python', ['note1'])
        self.assertEqual(result, 'Course and course notes have been added.')
        self.assertEqual(self.s.courses, {'Python': ['note1']})

    def test_enroll_course_added_no_notes(self):
        result = self.s.enroll('Python', ['note1'], 'n')
        self.assertEqual(result, 'Course has been added.')
        self.assertEqual(self.s.courses, {'Python': []})

    def test_enroll_course_added_notes(self):
        result = self.s.enroll('Python', ['note1'], 'Y')
        self.assertEqual(result, 'Course and course notes have been added.')
        self.assertEqual(self.s.courses, {'Python': ['note1']})

    def test_enroll_course_already_added_with_y(self):
        self.s.courses = {'Python': ['note1']}
        result = self.s.enroll('Python', ['note2'], 'n')
        self.assertEqual(result, 'Course already added. Notes have been updated.')
        self.assertEqual(self.s.courses, {'Python': ['note1', 'note2']})

    def test_enroll_existing_course_with_adding_notes(self):
        self.s.enroll('Python', ['note1', 'note2'], 'Y')
        result = self.s.enroll('Python', ['note3'], 'Y')
        self.assertEqual(result, 'Course already added. Notes have been updated.')

    def test_add_notes(self):
        self.s.courses = {'Python': ['note1']}
        result = self.s.add_notes('Python', 'note2')
        self.assertEqual(result, 'Notes have been updated')
        self.assertEqual(self.s.courses['Python'], ['note1', 'note2'])

    def test_add_notes_exception(self):
        with self.assertRaises(Exception) as e:
            self.s.add_notes('Java', 'note1')
        self.assertEqual(str(e.exception), 'Cannot add notes. Course not found.')

    def test_leave_course(self):
        self.s.courses = {'Python': []}
        result = self.s.leave_course('Python')
        self.assertEqual(result, 'Course has been removed')
        self.assertEqual(self.s.courses, {})

    def test_leave_course_not_found_exception(self):
        with self.assertRaises(Exception) as e:
            self.s.leave_course('Java')
        self.assertEqual(str(e.exception), 'Cannot remove course. Course not found.')


if __name__ == '__main__':
    main()
