def tags(dec_arg):
    def decorator(ref_func):
        def wrapper(*args):
            result = ref_func(*args)
            return f'<{dec_arg}>{result}</{dec_arg}>'

        return wrapper

    return decorator


@tags('p')
def join_strings(*args):
    return "".join(args)


print(join_strings("Hello", " you!"))


@tags('h1')
def to_upper(text):
    return text.upper()


print(to_upper('hello'))
