class Hotel:
    def __init__(self, name):
        self.name = name
        self.rooms = []
        self.guests = 0

    @classmethod
    def from_stars(cls, stars_count):
        return cls(f'{stars_count} stars Hotel')

    def add_room(self, room):
        self.rooms.append(room)

    def take_room(self, room_number, people):
        for r in self.rooms:
            if r.number == room_number and not r.is_taken:
                if people <= r.capacity:
                    self.guests += people
                    r.guests += people
                    r.is_taken = True
                    return

    def free_room(self, room_number):
        for r in self.rooms:
            if r.number == room_number:
                self.guests -= r.guests
                r.guests = 0
                r.is_taken = False

    def status(self):
        result = f'Hotel {self.name} has {self.guests} total guests\n'
        result += f'Free rooms: {", ".join(str(r.number) for r in self.rooms if not r.is_taken)}\n'
        result += f'Taken rooms: {", ".join(str(r.number) for r in self.rooms if r.is_taken)}'
        return result
