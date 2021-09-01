rows, cols = [int(x) for x in input().split()]

matrix = []

for _ in range(rows):
    matrix.append([x for x in input().split()])

commands = input()

while not commands == 'END':
    command_split = commands.split()
    command = command_split[0]

    if command.startswith('swap') and len(command_split) == 5 and \
            int(command_split[1]) in range(rows) and int(command_split[3]) in range(rows) and \
            int(command_split[2]) in range(cols) and int(command_split[4]) in range(cols):

        matrix[int(command_split[1])][int(command_split[2])], matrix[int(command_split[3])][int(command_split[4])] = \
            matrix[int(command_split[3])][int(command_split[4])], matrix[int(command_split[1])][int(command_split[2])]

        for i in range(rows):
            print(*matrix[i])
    else:
        print('Invalid input!')

    commands = input()
