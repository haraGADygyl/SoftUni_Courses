from collections import deque


def best_list_pureness(numbers, k):
    numbers = deque(numbers)

    pureness_value = 0
    count_rotations = 0
    count = 0
    for i in range(k+1):
        pureness = 0

        for index, value in enumerate(numbers):
            pureness += index * value

        if pureness > pureness_value:
            pureness_value = pureness
            count_rotations = count

        numbers.rotate()

        count += 1

    return f'Best pureness {pureness_value} after {count_rotations} rotations'


test = ([4, 3, 2, 6], 4)
result = best_list_pureness(*test)
print(result)

test = ([7, 9, 2, 5, 3, 4], 3)
result = best_list_pureness(*test)
print(result)

test = ([1, 2, 3, 4, 5], 10)
result = best_list_pureness(*test)
print(result)
