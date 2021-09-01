class sequence_repeat:
    def __init__(self, sequence, number):
        self.sequence = sequence
        self.number = number
        self.current = 1
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.current > self.number:
            raise StopIteration

        if self.index == len(self.sequence):
            self.index = 0

        temp = self.sequence[self.index]
        self.current += 1
        self.index += 1
        return temp


result = sequence_repeat('abc', 5)
for item in result:
    print(item, end ='')
