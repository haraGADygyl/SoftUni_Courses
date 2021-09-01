def odd_or_even_sum_times_length(command, nums):
    result = 0

    if command == 'Odd':
        result = sum(filter(lambda x: x % 2 == 1, nums))
    else:
        result = sum(filter(lambda x: x % 2 == 0, nums))

    return result * len(nums)


command = input()
numbers = [int(x) for x in input().split()]
print(odd_or_even_sum_times_length(command, numbers))
