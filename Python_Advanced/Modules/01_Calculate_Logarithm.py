import math

number = int(input())
log_base = input()

if log_base == 'natural':
    print(f'{math.log(number):.2f}')
else:
    print(f'{math.log(number, int(log_base)):.2f}')