rows_count = int(input())

matrix = [[int(x) for x in input().split()] for _ in range(rows_count)]

commands = input()

while not commands == 'END':
    commands_split = commands.split()
    command = commands_split[0]
    x = int(commands_split[1])
    y = int(commands_split[2])
    value = int(commands_split[3])

    if x not in range(rows_count) or y not in range(rows_count):
        print('Invalid coordinates')
    else:
        if command == 'Add':
            matrix[x][y] += value
        elif command == 'Subtract':
            matrix[x][y] -= value

    commands = input()

[print(*matrix[row]) for row in range(rows_count)]
