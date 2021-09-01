matrix_size = [int(x) for x in input().split(', ')]

rows = matrix_size[0]
cols = matrix_size[1]

matrix = []

for i in range(rows):
    row = [int(x) for x in input().split()]
    matrix.append(row)

sum_matrix = 0

for j in range(cols):
    for k in range(rows):
        sum_matrix += matrix[k][j]
    print(sum_matrix)
    sum_matrix = 0
