import re

with open('text.txt') as my_file:
    for index, line in enumerate(my_file.readlines()):
        if index % 2 == 0:
            new_line = re.sub(r'[-,.!?]', '@', line)
            print(' '.join(reversed(new_line.split())))
