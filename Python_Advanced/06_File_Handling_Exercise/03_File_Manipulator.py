import os

commands = input()
while not commands == 'End':
    commands_split = commands.split('-')
    command = commands_split[0]
    file_name = commands_split[1]

    if command == 'Create':
        with open(file_name, 'w'):
            pass

    elif command == 'Add':
        line = commands_split[2]
        with open(file_name, 'a') as file:
            file.write(line+'\n')

    elif command == 'Replace':
        old_string = commands_split[2]
        new_string = commands_split[3]

        try:
            with open(file_name, 'r') as file:
                data = file.read()

            with open(file_name, 'w') as file:
                data = data.replace(old_string, new_string)
                file.write(data)

        except FileNotFoundError:
            print('An error occurred')

    elif command == 'Delete':
        try:
            os.remove(file_name)
        except FileNotFoundError:
            print('An error occurred')

    commands = input()