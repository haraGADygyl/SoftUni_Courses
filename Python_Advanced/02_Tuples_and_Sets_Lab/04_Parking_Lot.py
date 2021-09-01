num = int(input())

cars = set()

for i in range(num):
    command, number = input().split(', ')

    if command == 'IN':
        cars.add(number)
    else:
        if number in cars:
            cars.remove(number)

if not cars:
    print('Parking Lot is Empty')
else:
    [print(car) for car in cars]