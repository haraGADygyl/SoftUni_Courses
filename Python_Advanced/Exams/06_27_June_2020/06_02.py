matrix_size = int(input())

matrix = []
for _ in range(matrix_size):
    matrix.append([x for x in input()])

snake_position = tuple()
burrows = []
for row in range(matrix_size):
    for col in range(matrix_size):
        if matrix[row][col] == 'S':
            snake_position = (row, col)

        if matrix[row][col] == 'B':
            burrows.append((row, col))

food_quantity = 0
while True:
    command = input()

    current_x = snake_position[0]
    current_y = snake_position[1]

    if command == 'up':
        current_x -= 1
    elif command == 'down':
        current_x += 1
    elif command == 'left':
        current_y -= 1
    elif command == 'right':
        current_y += 1

    current_position = (current_x, current_y)
    matrix[snake_position[0]][snake_position[1]] = '.'

    if not (0 <= current_x < matrix_size) or not (0 <= current_y < matrix_size):
        print('Game over!')
        break
    if matrix[current_x][current_y] == '*':
        food_quantity += 1
        matrix[current_x][current_y] = 'S'
        snake_position = (current_x, current_y)

        if food_quantity >= 10:
            print('You won! You fed the snake.')
            matrix[current_x][current_y] = 'S'
            break
        else:
            continue

    if matrix[current_x][current_y] == 'B':
        for i in burrows:
            if current_x == i[0] and current_y == i[1]:
                burrows.remove(i)
            matrix[current_x][current_y] = '.'
            snake_position = (burrows[0][0], burrows[0][1])

    if matrix[current_x][current_y] == '-':
        matrix[current_x][current_y] = 'S'
        snake_position = (current_x, current_y)


print(f'Food eaten: {food_quantity}')
for row in matrix:
    print("".join(row))
