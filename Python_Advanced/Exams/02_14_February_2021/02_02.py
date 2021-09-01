field_size = int(input())

field = []
for _ in range(field_size):
    field.append(input().split())

player_position = tuple()
for row in range(field_size):
    for col in range(field_size):
        if field[row][col] == 'P':
            player_position = (row, col)

coins = 0
trail = []
while True:
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

    if ((0 <= current_x < field_size) and (0 <= current_y < field_size)) and (not field[current_x][current_y] == 'X'):
        coins += int(field[current_x][current_y])
        player_position = (current_x, current_y)
        trail.append(list(player_position))
    else:
        coins //= 2
        print(f'Game over! You\'ve collected {coins} coins.')
        break

    if coins > 100:
        print(f'You won! You\'ve collected {coins} coins.')
        break

print('Your path: ')
for element in trail:
    print(element)