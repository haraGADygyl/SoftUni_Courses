from collections import deque


def list_manipulator(numbers, command, position, *args):
    numbers = deque(numbers)

    if command == 'add':
        if position == 'beginning':
            for elements in reversed(args):
                numbers.appendleft(elements)
        elif position == 'end':
            for elements in args:
                numbers.append(elements)

    elif command == 'remove':
        if position == 'beginning':
            if args:
                for i in range(*args):
                    numbers.popleft()
            else:
                numbers.popleft()

        elif position == 'end':
            if args:
                for j in range(*args):
                    numbers.pop()
            else:
                numbers.pop()

    return list(numbers)


print(list_manipulator([1, 2, 3], "remove", "end"))
print(list_manipulator([1, 2, 3], "remove", "beginning"))
print(list_manipulator([1, 2, 3], "add", "beginning", 20))
print(list_manipulator([1, 2, 3], "add", "end", 30))
print(list_manipulator([1, 2, 3], "remove", "end", 2))
print(list_manipulator([1, 2, 3], "remove", "beginning", 2))
print(list_manipulator([1, 2, 3], "add", "beginning", 20, 30, 40))
print(list_manipulator([1, 2, 3], "add", "end", 30, 40, 50))
