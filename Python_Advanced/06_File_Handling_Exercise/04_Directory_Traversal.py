import os

_, _, files = next(os.walk(input()))

extensions = {}

for file in files:
    extension = file.split('.')[-1]

    if extension not in extensions:
        extensions[extension] = []
    extensions[extension].append(file)

with open(os.path.expanduser('~/Desktop/report.txt'), 'w') as output:
    for i in sorted(extensions):
        files = sorted(extensions[i])

        output.write(f'.{i}\n')

        for file in files:
            output.write(f'---{file}\n')
