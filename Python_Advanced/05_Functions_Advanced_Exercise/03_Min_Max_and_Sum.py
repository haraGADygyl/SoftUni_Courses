def min_number(nums):
    return min(nums)


def max_number(nums):
    return max(nums)


def sum_numbers(nums):
    return sum(nums)


number = [int(x) for x in input().split()]
print(f'The minimum number is {min_number(number)}')
print(f'The maximum number is {max_number(number)}')
print(f'The sum number is: {sum_numbers(number)}')
