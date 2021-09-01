from Python_Advanced.Modules.Mathematical_Operations.constants import mapper

expression = input().split()
first_num = float(expression[0])
sign = expression[1]
second_num = int(expression[2])

print(mapper[sign](first_num, second_num))
