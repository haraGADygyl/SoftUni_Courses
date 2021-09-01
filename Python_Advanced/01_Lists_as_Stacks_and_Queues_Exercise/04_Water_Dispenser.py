from collections import deque

water_quantity = int(input())
name = input()

queue = deque()

while not name == "Start":
    queue.append(name)

    name = input()

command = input()

while not command == "End":
    if command.startswith("refill"):
        water_quantity += int(command.split()[1])
    else:
        liters_needed = int(command)
        name = queue.popleft()
        if water_quantity >= liters_needed:
            water_quantity -= liters_needed
            print(f"{name} got water")
        else:
            print(f"{name} must wait")

    command = input()

print(f"{water_quantity} liters left")
