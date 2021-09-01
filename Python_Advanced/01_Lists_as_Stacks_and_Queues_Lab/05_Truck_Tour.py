from collections import deque

pumps_count = int(input())

stations = deque([])

for i in range(pumps_count):
    stations.append([el for el in input().split()])

for big_circle in range(pumps_count):
    tank_petrol = 0
    is_valid = True

    for small_circle in range(pumps_count):
        tank_petrol += int(stations[small_circle][0]) - int(stations[small_circle][1])

        if tank_petrol < 0:
            is_valid = False
            stations.append(stations.popleft())
            break

    if is_valid:
        print(big_circle)
        break
