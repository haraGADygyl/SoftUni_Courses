matrix_size = int(input())

matrix = [[int(x) for x in input().split(', ')] for row in range(matrix_size)]

first_diagonal = [matrix[x][x] for x in range(matrix_size)]
second_diagonal = [matrix[x][matrix_size-x-1] for x in range(matrix_size)]


print(f'First diagonal: {", ".join([str(x) for x in first_diagonal])}. Sum: {sum(first_diagonal)}')
print(f'Second diagonal: {", ".join([str(x) for x in second_diagonal])}. Sum: {sum(second_diagonal)}')
