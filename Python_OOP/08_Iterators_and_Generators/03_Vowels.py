class vowels:
    def __init__(self, string):
        self.string = string
        self.start = 0
        self.all_vowels = 'AEYUIOaeyuio'
        self.vowels_list = [v for v in self.string if v in self.all_vowels]
        self.end = len(self.vowels_list) - 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.start > self.end:
            raise StopIteration
        index = self.start
        self.start += 1
        return self.vowels_list[index]


my_string = vowels('Abcedifuty0o')
for char in my_string:
    print(char)
