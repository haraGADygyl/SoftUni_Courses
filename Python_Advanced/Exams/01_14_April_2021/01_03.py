def flights(*args):
    result = {}

    for element in range(0, len(args), 2):
        if args[element] == 'Finish':
            break

        route = args[element]
        passengers = int(args[element + 1])

        if route not in result:
            result[route] = 0
        result[route] += passengers

    return result


print(flights('Vienna', 256, 'Vienna', 26, 'Morocco', 98, 'Paris', 115, 'Finish', 'Paris', 15))
print(flights('London', 0, 'New York', 9, 'Aberdeen', 215, 'Sydney', 2, 'New York', 300, 'Nice', 0, 'Finish'))
print(flights('Finish', 'New York', 90, 'Aberdeen', 300, 'Sydney', 0))
