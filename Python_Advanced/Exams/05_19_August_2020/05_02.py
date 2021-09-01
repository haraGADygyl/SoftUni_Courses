field_size = int(input())

field = []
for _ in range(field_size):
    field.append(['0'] * field_size)

mines_count = int(input())
for _ in range(mines_count):
    mine_position = input()[1:-1].split(', ')
    x = int(mine_position[0])
    y = int(mine_position[1])

    field[x][y] = '*'

deltas = [
    (0, -1),
    (-1, -1),
    (-1, 0),
    (-1, 1),
    (0, 1),
    (1, 1),
    (1, 0),
    (1, -1)
]

for row in range(field_size):
    for col in range(field_size):
        if field[row][col] == '*':
            continue

        count = 0
        for delta in deltas:
            current_x = row + delta[0]
            current_y = col + delta[1]

            if (0 <= current_x < field_size) and (0 <= current_y < field_size):
                if field[current_x][current_y] == '*':
                    count += 1

        field[row][col] = str(count)

for row in field:
    print(' '.join(row))
