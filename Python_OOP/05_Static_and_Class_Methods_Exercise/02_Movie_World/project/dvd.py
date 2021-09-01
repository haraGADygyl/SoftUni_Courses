months_dict = {'01': 'January',
               '02': 'February',
               '03': 'March',
               '04': 'April',
               '05': 'May',
               '06': 'June',
               '07': 'July',
               '08': 'August',
               '09': 'September',
               '10': 'October',
               '11': 'November',
               '12': 'December'}


class DVD:
    def __init__(self, name, id, creation_year, creation_month, age_restriction):
        self.name = name
        self.id = id
        self.creation_year = creation_year
        self.creation_month = creation_month
        self.age_restriction = age_restriction
        self.is_rented = False

    @classmethod
    def from_date(cls, id, name, date, age_restriction):
        day, month, year = date.split('.')
        year = int(year)

        return cls(name, id, year, months_dict[month], age_restriction)

    def __repr__(self):
        return f'{self.id}: {self.name} ({self.creation_month} {self.creation_year})' \
               f' has age restriction {self.age_restriction}. ' \
               f'Status: {"rented" if self.is_rented else "not rented"}'
