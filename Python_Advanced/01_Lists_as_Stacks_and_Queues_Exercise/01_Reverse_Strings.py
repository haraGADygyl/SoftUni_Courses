text = [x for x in input()]

result = []

while text:
    result.append(text.pop())

print("".join(result))
