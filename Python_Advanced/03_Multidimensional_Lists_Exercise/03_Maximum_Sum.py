rows, cols = [int(x) for x in input().split()]

matrix = []
matrix_sum = 0
start_row = None
start_col = None

for _ in range(rows):
    matrix.append([int(x) for x in input().split()])

for row in range(rows - 2):
    for col in range(cols - 2):
        current_sum = matrix[row][col] + matrix[row][col + 1] + matrix[row][col + 2] + \
                      matrix[row + 1][col] + matrix[row + 1][col + 1] + matrix[row + 1][col + 2] + \
                      matrix[row + 2][col] + matrix[row + 2][col + 1] + matrix[row + 2][col + 2]
        if current_sum >= matrix_sum:
            matrix_sum = current_sum
            start_row, start_col = (row, col)

print(f'Sum = {matrix_sum}')
print(matrix[start_row][start_col], matrix[start_row][start_col + 1], matrix[start_row][start_col + 2])
print(matrix[start_row + 1][start_col], matrix[start_row + 1][start_col + 1], matrix[start_row + 1][start_col + 2])
print(matrix[start_row + 2][start_col], matrix[start_row + 2][start_col + 1], matrix[start_row + 2][start_col + 2])
