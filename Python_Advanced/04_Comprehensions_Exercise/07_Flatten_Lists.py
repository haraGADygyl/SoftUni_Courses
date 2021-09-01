chars = [x for x in input().split('|')]

result = []
#
# for i in range(len(chars) - 1, -1, -1):
#     for j in chars[i].split():
#         result.append(j)

result_comp = [m for n in range(len(chars) - 1, -1, -1) for m in chars[n].split()]

# print(*result)
print(*result_comp)
