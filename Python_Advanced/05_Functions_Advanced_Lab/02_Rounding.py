def round_numbers(nums):
    return [round(x) for x in nums]


numbers = [float(x) for x in input().split()]
print(round_numbers(numbers))
