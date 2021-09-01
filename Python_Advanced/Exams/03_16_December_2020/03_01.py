from collections import deque

males = deque(int(x) for x in input().split())
females = deque(int(x) for x in input().split())

matches_count = 0

while males and females:
    last_male = males.pop()
    first_female = females.popleft()

    if last_male <= 0:
        females.appendleft(first_female)
        continue

    if first_female <= 0:
        males.append(last_male)
        continue

    if last_male % 25 == 0:
        if males:
            males.pop()
            females.appendleft(first_female)
            continue
    elif first_female % 25 == 0:
        if females:
            females.popleft()
            males.append(last_male)
            continue

    if last_male == first_female:
        matches_count += 1
    else:
        males.append(last_male - 2)

print(f'Matches: {matches_count}')

if males:
    print(f'Males left: {", ".join(str(x) for x in reversed(males))}')
else:
    print('Males left: none')

if females:
    print(f'Females left: {", ".join(str(x) for x in females)}')
else:
    print('Females left: none')
