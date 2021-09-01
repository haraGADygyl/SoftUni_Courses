def is_divisible(num):
    if num % 2 == 0 or num % 3 == 0 or num % 5 == 0 or num % 7 == 0:
        return True
    return False


start, end = int(input()), int(input())

result = [
    x
    for x in range(start, end + 1)
    if is_divisible(x)

]

print(result)