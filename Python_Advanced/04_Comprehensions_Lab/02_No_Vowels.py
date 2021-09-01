text = input()

vowels = 'aouei'

result = [x for x in text if x.lower() not in vowels]

print(*result, sep='')
