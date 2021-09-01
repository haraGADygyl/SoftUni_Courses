rows, cols = [int(x) for x in input().split(', ')]

matrix = []

for _ in range(rows):
    matrix.append([int(x) for x in input().split(', ')])

sub_matrix_sum = 0
sub_matrix_start = None

for row in range(rows - 1, 0, -1):
    for col in range(cols - 1, 0, -1):
        current_sum = matrix[row][col] + matrix[row][col - 1] + \
                      matrix[row - 1][col] + matrix[row - 1][col - 1]
        if current_sum >= sub_matrix_sum:
            sub_matrix_sum = current_sum
            sub_matrix_start = (row, col)

start_row, start_col = sub_matrix_start

print(matrix[start_row - 1][start_col - 1], matrix[start_row - 1][start_col])
print(matrix[start_row][start_col - 1], matrix[start_row][start_col])
print(sub_matrix_sum)
