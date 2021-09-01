def convert_to_abs(nums):
    return [abs(x) for x in nums]


numbers = [float(x) for x in input().split()]
print(convert_to_abs(numbers))
