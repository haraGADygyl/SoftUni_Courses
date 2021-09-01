command = input()

result = {}
while not command.isdigit():
    command = command.split('-')
    name = command[0]
    phone_num = command[1]

    if name not in result:
        result[name] = ''
    result[name] = phone_num

    command = input()

for i in range(int(command)):
    check_name = input()

    if check_name in result:
        print(f'{check_name} -> {result[check_name]}')
    else:
        print(f'Contact {check_name} does not exist.')
