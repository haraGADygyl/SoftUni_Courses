from collections import deque

numbers = input().split()

queue = deque()

for el in range(len(numbers)):
    curr_num = numbers.pop()
    queue.append(curr_num)

print(*queue)