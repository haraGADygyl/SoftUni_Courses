expression = input()

parenthesis = []

for index, char in enumerate(expression):
    if char == "(":
        parenthesis.append(index)
    elif char == ")":
        start_index = parenthesis.pop()
        print(expression[start_index:index+1])
