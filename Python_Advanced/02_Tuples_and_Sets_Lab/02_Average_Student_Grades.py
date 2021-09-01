students_count = int(input())

result = {}

for student in range(students_count):
    name_grade = input().split()
    name = name_grade[0]
    grade = name_grade[1]

    if name not in result:
        result[name] = []
    result[name] += [grade]

for key, value in result.items():
    average = sum([float(x) for x in value]) / len(value)

    print(f'{key} -> {" ".join([f"{float(x):.2f}" for x in value])} (avg: {average:.2f})')
