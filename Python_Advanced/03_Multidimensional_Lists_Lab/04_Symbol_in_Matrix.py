number = int(input())

matrix = []

for row in range(number):
    matrix.append([x for x in input()])

symbol = input()
is_present = False
for row in range(number):
    for col in range(number):
        if matrix[row][col] == symbol:
            print((row, col))
            is_present = True
            exit()

if not is_present:
    print(f'{symbol} does not occur in the matrix')
