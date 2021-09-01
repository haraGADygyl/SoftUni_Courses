def squares(number):
    current_num = 1

    while current_num <= number:
        yield current_num ** 2
        current_num += 1


class Squares:
    def __init__(self, end):
        self.start = 1
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.start > self.end:
            raise StopIteration
        index = self.start
        self.start += 1
        return index ** 2


print(list(squares(5)))

for el in Squares(5):
    print(el)
