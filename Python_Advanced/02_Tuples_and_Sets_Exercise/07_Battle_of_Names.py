number = int(input())

odd_set = set()
even_set = set()

for line in range(1, number + 1):
    name = input()

    char_sum = 0
    for char in name:
        char_sum += ord(char)

    char_sum //= line

    if char_sum % 2 == 0:
        even_set.add(char_sum)
    else:
        odd_set.add(char_sum)

if sum(odd_set) == sum(even_set):
    print(*[x for x in odd_set.union(even_set)], sep=', ')
elif sum(odd_set) > sum(even_set):
    print(*[x for x in odd_set.difference(even_set)], sep=', ')
else:
    print(*[x for x in odd_set.symmetric_difference(even_set)], sep=', ')
