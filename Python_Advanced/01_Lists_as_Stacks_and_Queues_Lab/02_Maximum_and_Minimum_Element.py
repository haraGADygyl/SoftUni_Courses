from collections import deque

queue = []
lines = int(input())

for i in range(lines):
    queries = input()

    if queries.startswith("1"):
        command = queries.split()
        queue.append(int(command[1]))

    elif queries.startswith("2"):
        if queue:
            queue.pop()

    elif queries.startswith("3"):
        if queue:
            print(max(queue))

    elif queries.startswith("4"):
        if queue:
            print(min(queue))

result = deque()

for el in range(len(queue)):
    result.append(queue.pop())

print(*result, sep=", ")