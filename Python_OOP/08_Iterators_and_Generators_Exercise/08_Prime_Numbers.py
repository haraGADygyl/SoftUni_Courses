def is_prime(number):
    for i in range(2, number):
        if number % i == 0 or number <= 1:
            return False
    return True


def get_primes(numbers):
    primes = filter(lambda n: is_prime(n), numbers)
    for i in primes:
        yield i


print(list(get_primes([2, 4, 3, 5, 6, 9, 1, 0])))
