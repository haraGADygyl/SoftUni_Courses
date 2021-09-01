import os
import re

with open('words.txt') as words:
    searched_words = words.read().lower().split()

result = {}

with open('input.txt') as input_text:
    input_data = input_text.read().lower()

    for word in searched_words:
        found_words = re.findall(rf"(?<=([^a-z])){word}(?=(\.|\s|\,))", input_data)
        result[word] = len(found_words)

sorted_result = sorted(result.items(), key=lambda x: x[1], reverse=True)
[print(f'{key} - {value}') for key, value in sorted_result]
