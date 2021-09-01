number = int(input())

matrix = []

for i in range(number):
    row = [int(x) for x in input().split()]
    matrix.append(row)

matrix_sum = 0

for row in range(number):
    for col in range(number):
        if row == col:
            matrix_sum += matrix[row][col]

print(matrix_sum)