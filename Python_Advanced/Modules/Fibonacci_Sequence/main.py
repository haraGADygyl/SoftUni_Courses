from Python_Advanced.Modules.Fibonacci_Sequence.core import *

commands = input()

while not commands == 'Stop':
    commands_split = commands.split()
    command = commands_split[0]

    result = []
    if command == 'Create':
        count = int(commands_split[2])
        result = generate_sequence(count)
        print(*result)

    elif command == 'Locate':
        index = int(commands_split[1])
        print(find_number(index, result))

    commands = input()
