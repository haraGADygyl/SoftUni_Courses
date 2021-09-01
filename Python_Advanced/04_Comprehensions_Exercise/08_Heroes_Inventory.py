heroes_names = input().split(', ')
commands = input()

heroes = {name: {'items': [], 'cost': 0} for name in heroes_names}

while not commands == 'End':
    command = commands.split('-')
    name, item = command[0], command[1]
    item_cost = int(command[2])

    if item not in heroes[name]['items']:
        heroes[name]['items'].append(item)
        heroes[name]['cost'] += item_cost

    commands = input()

[print(f'{key} -> Items: {len(heroes[key]["items"])}, Cost: {heroes[key]["cost"]}') for key, value in heroes.items()]
