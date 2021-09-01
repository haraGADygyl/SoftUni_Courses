numbers = input().split()
first_num = int(numbers[0])
second_num = int(numbers[1])

first_set = set()
second_set = set()

for i in range(first_num):
    first_elements = int(input())
    first_set.add(first_elements)

for j in range(second_num):
    second_elements = int(input())
    second_set.add(second_elements)

result = (first_set.intersection(second_set))

[print(x) for x in result]
