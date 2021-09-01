from collections import deque

food_quantity = int(input())
order_quantity = input().split()

queue = deque()
biggest_order = 0

while order_quantity:
    queue.appendleft(int(order_quantity.pop()))

for i in range(len(queue)):
    order = queue.popleft()

    if order > biggest_order:
        biggest_order = order

    if order <= food_quantity:
        food_quantity -= order
    else:
        queue.appendleft(order)
        break

print(biggest_order)

if len(queue) == 0:
    print("Orders complete")

else:
    print(f'Orders left: {" ".join([str(x) for x in queue])}')
