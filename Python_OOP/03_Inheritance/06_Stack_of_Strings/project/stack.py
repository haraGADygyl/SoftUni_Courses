class Stack:
    def __init__(self):
        self.data = []

    def push(self, element):
        self.data.append(str(element))

    def pop(self):
        return self.data.pop()

    def top(self):
        return self.data[-1]

    def is_empty(self):
        if self.data:
            return False
        return True

    def __str__(self):
        return f'[{", ".join(str(el) for el in reversed(self.data))}]'

s = Stack()
s.push('lqlql')
s.push('lqlql2')
s.push('lqlql23')
print(s)
print(s.pop())
print(s.top())
print(s)
print(s.is_empty())