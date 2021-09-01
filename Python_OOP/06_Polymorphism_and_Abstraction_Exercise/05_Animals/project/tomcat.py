from project.cat import Cat
# from cat import Cat


class Tomcat(Cat):
    GENDER = 'Male'

    def __init__(self, name, age):
        super().__init__(name, age, Tomcat.GENDER)

    def make_sound(self):
        return 'Hiss'
