rows = int(input())

matrix = []

for _ in range(rows):
    matrix.append([int(x) for x in input().split(', ')])

result = [[j for j in matrix[i] if j % 2 == 0] for i in range(rows)]

print(result)
