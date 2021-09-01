matrix_size = [int(x) for x in input().split(', ')]

rows = matrix_size[0]
cols = matrix_size[1]

matrix = []
sum_matrix = 0

for i in range(rows):
    row = [int(x) for x in input().split(', ')]
    matrix.append(row)
    sum_matrix += sum(row)

print(sum_matrix)
print(matrix)
