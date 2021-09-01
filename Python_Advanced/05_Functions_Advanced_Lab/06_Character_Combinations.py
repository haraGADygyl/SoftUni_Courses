from itertools import permutations

text = list(input())
print(*[f'{"".join(el)}'for el in permutations(text)], sep='\n')
