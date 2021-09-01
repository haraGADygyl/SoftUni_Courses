categories = {item: [] for item in input().split(', ')}
number = int(input())

quantity_sum = 0
quality_sum = 0

for _ in range(number):
    data = input().split(' - ')
    category = data[0]
    item_name = data[1]

    item_data = data[2].split(';')
    quantity = item_data[0].split(':')
    quality = item_data[1].split(':')

    quantity_val = int(quantity[1])
    quality_val = int(quality[1])

    if item_name not in categories[category]:
        categories[category].append(item_name)

    quantity_sum += quantity_val
    quality_sum += quality_val

print(f'Count of items: {quantity_sum}')
print(f'Average quality: {quality_sum  / len(categories):.2f}')

# for key, value in categories.items():
#     print(f'{key} -> {", ".join(value)}')

[print(f'{key} -> {", ".join(value)}') for key, value in categories.items()]
