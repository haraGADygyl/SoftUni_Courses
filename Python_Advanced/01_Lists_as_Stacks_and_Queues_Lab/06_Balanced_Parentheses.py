parentheses = input()

is_balanced = True

opening = []
mirror = {'(': ')', '[': ']', '{': '}'}

for i in parentheses:
    if i in '{[(':
        opening.append(i)
    else:
        if not opening:
            is_balanced = False
            break

        current_opening_p = opening.pop()

        if not mirror[current_opening_p] == i:
            is_balanced = False
            break

if is_balanced:
    print('YES')
else:
    print('NO')
