def even_numbers(nums):
    return list(filter(lambda x: x % 2 == 0, nums))


numbers = [int(x) for x in input().split()]
print(even_numbers(numbers))
