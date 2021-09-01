from itertools import combinations

names = input().split(', ')
number = int(input())

print(*[f'{", ".join(name)}' for name in combinations(names, number)], sep='\n')
