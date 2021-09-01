def vowel_filter(function):
    def wrapper():
        letters_list = function()
        return [l for l in letters_list if l in 'aeyuio']

    return wrapper


@vowel_filter
def get_letters():
    return ["a", "b", "c", "d", "e"]


print(get_letters())
