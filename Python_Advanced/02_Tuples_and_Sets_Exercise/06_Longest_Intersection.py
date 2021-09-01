number = int(input())

first_set = set()
second_set = set()

final_result = []

for _ in range(number):
    lines = input().split('-')

    first_line = lines[0].split(',')
    second_line = lines[1].split(',')

    start_first_line = int(first_line[0])
    end_first_line = int(first_line[1])

    start_second_line = int(second_line[0])
    end_second_line = int(second_line[1])

    for i in range(start_first_line, end_first_line + 1):
        first_set.add(i)

    for j in range(start_second_line, end_second_line + 1):
        second_set.add(j)

    result = list(first_set.intersection(second_set))

    if len(result) > len(final_result):
        final_result = result

    first_set.clear()
    second_set.clear()

print(f'Longest intersection is {final_result} with length {len(final_result)}')
