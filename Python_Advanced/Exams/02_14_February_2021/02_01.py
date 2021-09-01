from collections import deque

firework_effects = deque(int(x) for x in input().split(', '))
explosive_power = deque(int(x) for x in input().split(', '))

palm_firework = 0
willow_firework = 0
crossette_firework = 0
perfect_firework = False

while firework_effects and explosive_power:

    first_effect = firework_effects.popleft()
    last_explosive = explosive_power.pop()

    if first_effect < 1:
        explosive_power.append(last_explosive)
        continue
    elif last_explosive < 1:
        firework_effects.appendleft(first_effect)
        continue

    current_sum = first_effect + last_explosive

    if current_sum % 3 == 0 and not current_sum % 5 == 0:
        palm_firework += 1
    elif current_sum % 5 == 0 and not current_sum % 3 == 0:
        willow_firework += 1
    elif current_sum % 3 == 0 and current_sum % 5 == 0:
        crossette_firework += 1
    else:
        first_effect -= 1
        firework_effects.append(first_effect)
        explosive_power.append(last_explosive)

    if palm_firework >= 3 and willow_firework >= 3 and crossette_firework >= 3:
        perfect_firework = True
        break

if perfect_firework:
    print('Congrats! You made the perfect firework show!')
else:
    print('Sorry. You can\'t make the perfect firework show.')

if firework_effects:
    print(f'Firework Effects left: {", ".join(str(x) for x in firework_effects)}')

if explosive_power:
    print(f'Explosive Power left: {", ".join(str(x) for x in explosive_power)}')

print(f'Palm Fireworks: {palm_firework}')
print(f'Willow Fireworks: {willow_firework}')
print(f'Crossette Fireworks: {crossette_firework}')
