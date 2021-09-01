def get_magic_triangle(num):
    result = [[1], [1, 1]]

    for row in range(2, num):
        result.append([1] * (row + 1))

    for row in range(2, num):
        for col in range(row):
            if 0 <= row - 1 <= row and 0 <= col - 1 <= col:
                result[row][col] = result[row - 1][col] + result[row - 1][col - 1]
            else:
                result[row][col] = 1

    return result


get_magic_triangle(6)
