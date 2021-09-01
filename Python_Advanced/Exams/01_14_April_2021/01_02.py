player_names = input().split(', ')

board = []
for _ in range(7):
    board.append(input().split())

first_player_score = 501
first_player_throw = 0
second_player_score = 501
second_player_throw = 0

throws_counter = 1
while True:
    current_throw = input()[1:-1].split(', ')
    x = int(current_throw[0])
    y = int(current_throw[1])

    if (not 0 <= x < 7) or (not 0 <= y < 7):
        if not throws_counter % 2 == 0:
            first_player_throw += 1
        else:
            second_player_throw += 1
        throws_counter += 1
        continue

    result = (int(board[x][0]) + int(board[x][6]) + int(board[0][y]) + int(board[6][y]))

    current_sum = 0
    if board[x][y] == 'D':
        current_sum = result * 2
    elif board[x][y] == 'T':
        current_sum = result * 3
    elif board[x][y] == 'B':
        current_sum = 501
    else:
        current_sum = int(board[x][y])

    if not throws_counter % 2 == 0:
        first_player_score -= current_sum
        first_player_throw += 1
        if first_player_score <= 0:
            print(f'{player_names[0]} won the game with {first_player_throw} throws!')
            break
    else:
        second_player_score -= current_sum
        second_player_throw += 1
        if second_player_score <= 0:
            print(f'{player_names[1]} won the game with {second_player_throw} throws!')
            break

    throws_counter += 1
