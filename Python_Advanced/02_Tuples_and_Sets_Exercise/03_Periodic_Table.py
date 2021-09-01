number = int(input())

result = set()

for _ in range(number):
    chemicals = [x for x in input().split()]
    for chem in chemicals:
        result.add(chem)

[print(x) for x in result]
