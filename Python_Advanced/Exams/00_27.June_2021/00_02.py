shotgun_range = []

for _ in range(5):
    shotgun_range.append(input().split())

shooter_position = tuple()
targets_count = 0
for row in range(5):
    for col in range(5):
        if shotgun_range[row][col] == 'A':
            shooter_position = (row, col)
        if shotgun_range[row][col] == 'x':
            targets_count += 1

moves_count = int(input())
positions = []
targets_hit = 0
for _ in range(moves_count):
    commands = input().split()
    command = commands[0]
    direction = commands[1]

    current_x = shooter_position[0]
    current_y = shooter_position[1]

    if command == 'move':
        steps = int(commands[2])

        if direction == 'up':
            current_x -= steps
        elif direction == 'down':
            current_x += steps
        elif direction == 'left':
            current_y -= steps
        elif direction == 'right':
            current_y += steps

        if (0 <= current_x < 5) and (0 <= current_y < 5) and shotgun_range[current_x][current_y] == '.':
            shotgun_range[shooter_position[0]][shooter_position[1]] = '.'
            shooter_position = (current_x, current_y)
            shotgun_range[current_x][current_y] = 'A'

    elif command == 'shoot':
        if direction == 'up':
            while current_x >= 0:
                if shotgun_range[current_x][current_y] == 'x':
                    targets_hit += 1
                    positions.append([current_x, current_y])
                    shotgun_range[current_x][current_y] = '.'
                    break
                current_x -= 1

        elif direction == 'down':
            while current_x < 5:
                if shotgun_range[current_x][current_y] == 'x':
                    targets_hit += 1j
                    positions.append([current_x, current_y])
                    shotgun_range[current_x][current_y] = '.'
                    break
                current_x += 1

        elif direction == 'left':
            while current_y >= 0:
                if shotgun_range[current_x][current_y] == 'x':
                    targets_hit += 1
                    positions.append([current_x, current_y])
                    shotgun_range[current_x][current_y] = '.'
                    break
                current_y -= 1

        elif direction == 'right':
            while current_y < 5:
                if shotgun_range[current_x][current_y] == 'x':
                    targets_hit += 1
                    positions.append([current_x, current_y])
                    shotgun_range[current_x][current_y] = '.'
                    break
                current_y += 1

        if targets_hit == targets_count:
            break

if targets_hit == targets_count:
    print(f'Training completed! All {targets_count} targets hit.')
else:
    print(f'Training not completed! {targets_count - targets_hit} targets left.')

for element in positions:
    print(element)
