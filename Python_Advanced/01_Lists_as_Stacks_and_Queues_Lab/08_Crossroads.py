from collections import deque

green_light_duration = int(input())
free_window_duration = int(input())

queue = deque([])
total_cars_passed = 0
is_safe = True

while True:
    command = input()

    if command == 'END':
        print('Everyone is safe.')
        print(f'{total_cars_passed} total cars passed the crossroads.')
        break

    if command == 'green':
        total_duration = green_light_duration + free_window_duration

        while queue:
            car = queue.popleft()

            if len(car) <= total_duration:
                total_cars_passed += 1
                total_duration -= len(car)

                if total_duration < free_window_duration:
                    break
            else:
                is_safe = False
                character_hit = car[total_duration]

                print('A crash happened!')
                print(f'{car} was hit at {character_hit}.')
                exit()
    else:
        queue.append(command)
