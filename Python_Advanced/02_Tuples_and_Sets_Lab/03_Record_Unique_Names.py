num = int(input())

names = set()

for i in range(num):
    name = input()
    names.add(name)

[print(name) for name in names]