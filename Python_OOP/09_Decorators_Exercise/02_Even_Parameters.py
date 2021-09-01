def even_parameters(ref_func):
    def wrapper(*args):
        for i in args:
            try:
                if not i % 2 == 0:
                    return 'Please use only even numbers!'
            except TypeError:
                return 'Please use only even numbers!'

        return ref_func(*args)

    return wrapper


@even_parameters
def add(a, b):
    return a + b


print(add(2, 4))
print(add("Peter", 1))

@even_parameters
def multiply(*nums):
    result = 1
    for num in nums:
        result *= num
    return result

print(multiply(2, 4, 6, 8))
print(multiply(2, 4, 9, 8))
