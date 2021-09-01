names_count = int(input())

result = set()
for i in range(names_count):
    name = input()
    result.add(name)

[print(x) for x in result]
