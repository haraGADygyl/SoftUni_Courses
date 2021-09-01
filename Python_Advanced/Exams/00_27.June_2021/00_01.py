from collections import deque

chocolates = deque(int(x) for x in input().split(', '))
milk_cups = deque(int(x) for x in input().split(', '))

milkshakes = 0
is_ready = False
while chocolates and milk_cups:
    last_chocolate = chocolates.pop()
    first_milk_cup = milk_cups.popleft()

    if last_chocolate < 1 or first_milk_cup < 1:
        if last_chocolate < 1 and first_milk_cup >= 1:
            milk_cups.appendleft(first_milk_cup)

        if first_milk_cup < 1 and last_chocolate >= 1:
            chocolates.append(last_chocolate)
        continue

    if last_chocolate == first_milk_cup:
        milkshakes += 1
    else:
        milk_cups.append(first_milk_cup)
        chocolates.append(last_chocolate - 5)

    if milkshakes == 5:
        is_ready = True
        break

if is_ready:
    print('Great! You made all the chocolate milkshakes needed!')
else:
    print('Not enough milkshakes.')

if chocolates:
    print(f'Chocolate: {", ".join(str(x) for x in chocolates)}')
else:
    print('Chocolate: empty')

if milk_cups:
    print(f'Milk: {", ".join(str(x) for x in milk_cups)}')
else:
    print('Milk: empty')
