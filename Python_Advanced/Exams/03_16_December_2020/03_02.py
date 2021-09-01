from collections import deque

text = deque([x for x in input()])
lines_count = int(input())

field = []
for _ in range(lines_count):
    field.append([x for x in input()])

player_position = tuple()
for row in range(lines_count):
    for col in range(lines_count):
        if field[row][col] == 'P':
            player_position = (row, col)

commands_count = int(input())
for _ in range(commands_count):
    command = input()
    x = player_position[0]
    y = player_position[1]

    current_position = (0, 0)

    if command == 'up':
        current_position = (x - 1, y)
    elif command == 'down':
        current_position = (x + 1, y)
    elif command == 'left':
        current_position = (x, y - 1)
    elif command == 'right':
        current_position = (x, y + 1)

    current_x = current_position[0]
    current_y = current_position[1]

    if current_x not in range(lines_count) or current_y not in range(lines_count):
        if text:
            text.pop()
            continue
    else:
        if field[current_x][current_y] == '-':
            field[x][y] = '-'
            field[current_x][current_y] = 'P'
            player_position = current_position
        else:
            field[x][y] = '-'
            text.append(field[current_x][current_y])
            field[current_x][current_y] = 'P'
            player_position = current_position

print("".join(text))
for row in field:
    print("".join(row))
