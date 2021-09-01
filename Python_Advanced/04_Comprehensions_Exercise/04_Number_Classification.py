numbers = [num for num in input().split(', ')]

positive = [x for x in numbers if int(x) >= 0]
negative = [x for x in numbers if int(x) < 0]
even = [x for x in numbers if int(x) % 2 == 0]
odd = [x for x in numbers if int(x) % 2 == 1]

# pos_or_neg = [positive.append(num) if int(num) >= 0 else negative.append(num) for num in numbers]
# even_or_odd = [even.append(num) if int(num) % 2 == 0 else odd.append(num) for num in numbers]

print(f'Positive: {", ".join(positive)}', sep=', ')
print(f'Negative: {", ".join(negative)}', sep=', ')
print(f'Even: {", ".join(even)}', sep=', ')
print(f'Odd: {", ".join(odd)}', sep=', ')
