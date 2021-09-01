rows = int(input())

matrix = []

for _ in range(rows):
    matrix.append(input().split(', '))

result = [int(j) for i in range(rows) for j in matrix[i]]

print(result)
