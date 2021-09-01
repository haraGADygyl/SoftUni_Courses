matrix_size = int(input())

left_diagonal = 0
right_diagonal = 0

matrix = []

for _ in range(matrix_size):
    matrix.append([int(x) for x in input().split()])

for row in range(matrix_size):
    left_diagonal += matrix[row][row]

col = 0
for row in range(len(matrix) - 1, -1, -1):
    right_diagonal += matrix[row][col]
    col += 1

print(abs(left_diagonal - right_diagonal))
