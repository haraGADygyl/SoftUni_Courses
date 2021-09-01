from collections import deque

rows, cols = [int(x) for x in input().split()]
snake = deque(input())

matrix = []

for row in range(rows):
    matrix.append([])
    for col in range(cols):
        curr_value = snake.popleft()
        matrix[row].append(curr_value)
        snake.append(curr_value)

for row in range(rows):
    if row % 2 == 1:
        matrix[row].reverse()
    print(''.join(matrix[row]))
