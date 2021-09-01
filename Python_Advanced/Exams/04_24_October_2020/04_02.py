board = []

for row in range(8):
    board.append(input().split())

king_position = tuple()
for row in range(8):
    for col in range(8):
        if board[row][col] == 'K':
            king_position = (row, col)

x = king_position[0]
y = king_position[1]

queens_positions = []

deltas = [
    (-1, -1),
    (-1, 0),
    (-1, 1),
    (0, 1),
    (1, 1),
    (1, 0),
    (1, -1),
    (0, -1)
]

for delta in deltas:
    current_x = x
    current_y = y
    while True:

        if (not 0 <= current_x < 8) or (not 0 <= current_y < 8):
            break

        if board[current_x][current_y] == 'Q':
            queens_positions.append([current_x, current_y])
            break

        current_x += delta[0]
        current_y += delta[1]

if queens_positions:
    for i in queens_positions:
        print(i)
else:
    print('The king is safe!')
