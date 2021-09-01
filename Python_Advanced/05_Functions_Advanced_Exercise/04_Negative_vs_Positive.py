def negative_sum(nums):
    negative = [x for x in nums if x < 0]
    return sum(negative)


def positive_sum(nums):
    positive = [x for x in nums if x >= 0]
    return sum(positive)


def find_biggest_sum(neg_sum, pos_sum):
    if abs(neg_sum) > abs(pos_sum):
        return 'The negatives are stronger than the positives'
    else:
        return 'The positives are stronger than the negatives'


numbers = [int(x) for x in input().split()]
print(negative_sum(numbers))
print(positive_sum(numbers))
print(find_biggest_sum(negative_sum(numbers), positive_sum(numbers)))
