countries, capitals = input().split(', '), input().split(', ')

result = dict(zip(countries, capitals))

print(*[f'{key} -> {value}' for key, value in result.items()], sep='\n')
