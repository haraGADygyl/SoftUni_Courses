from collections import deque

queue = deque()
for cloth in input().split():
    queue.append(cloth)

rack_capacity = int(input())

racks_count = 1

total = 0
while len(queue) > 0:
    current_cloth = queue.pop()

    total += int(current_cloth)

    if total <= rack_capacity:
        continue
    else:
        queue.append(current_cloth)
        racks_count += 1
        total = 0

if len(queue) > 0:
    racks_count += 1

print(racks_count)