def numbers_searching(*args):
    result = []

    for element in range(min(args), max(args) + 1):
        if args.count(element) > 1:
            result.append(element)

    missing_number = 0
    for num in range(min(args), max(args)):
        if num not in args:
            missing_number = num
            break

    return [missing_number, sorted(result)]


print(numbers_searching(1, 2, 4, 2, 5, 4))
print(numbers_searching(5, 5, 9, 10, 7, 8, 7, 9))
print(numbers_searching(50, 50, 47, 47, 48, 45, 49, 44, 47, 45, 44, 44, 48, 44, 48))
