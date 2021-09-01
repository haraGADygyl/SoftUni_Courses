jobs = [int(x) for x in input().split(", ")]
searched_index = int(input())

result = []
for index, value in enumerate(jobs):
    result.append((value, index))

sorted_result = sorted(result, key=lambda x: (x[0], x[1]))

cycles = 0
for element in sorted_result:
    cycles += element[0]

    if element[1] == searched_index:
        break

print(cycles)
