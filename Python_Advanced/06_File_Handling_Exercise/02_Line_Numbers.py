import re

lines_list = []
with open('text.txt') as text_file:
    for line_num, line in enumerate(text_file.readlines()):
        line = line.strip()
        letter_counter = 0

        for char in line.strip():
            if char.isalpha():
                letter_counter += 1

        punctuations_count = len(re.findall(r"[,.!?;:\-'\"]", line))

        lines_list.append(f'Line {line_num + 1}: {line} ({letter_counter})({punctuations_count})')

with open('output.txt', 'w') as output_file:
    output_file.writelines([line + '\n' for line in lines_list])
