words = input().split()

result = [word for word in words if len(word) % 2 == 0]

print(*result, sep='\n')

# words = [
#     print(x)
#     for x in input().split()
#     if len(x) % 2 == 0
# ]
