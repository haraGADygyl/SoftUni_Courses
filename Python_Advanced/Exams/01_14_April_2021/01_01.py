from collections import deque

pizza_orders = deque(int(x) for x in input().split(', '))
employees = deque(int(x) for x in input().split(', '))

pizzas_made = 0

while pizza_orders and employees:
    current_order = pizza_orders.popleft()
    current_employee = employees.pop()

    if 0 >= current_order or current_order > 10:
        employees.append(current_employee)
        continue

    if current_order <= current_employee:
        pizzas_made += current_order
        continue

    if current_order > current_employee:
        difference = current_order - current_employee
        pizza_orders.appendleft(difference)
        pizzas_made += current_employee

if not pizza_orders:
    print('All orders are successfully completed!')
    print(f'Total pizzas made: {pizzas_made}')
    print(f'Employees: {", ".join(str(x) for x in employees)}')

if not employees:
    print('Not all orders are completed.')
    print(f'Orders left: {", ".join(str(x) for x in pizza_orders)}')
