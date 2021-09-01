text = input()

result = {}
for char in text:
    if char not in result:
        result[char] = 0
    result[char] += 1

result_sorted = sorted(result.items(), key=lambda x: x[0])

for key, value in result_sorted:
    print(f'{key}: {value} time/s')
