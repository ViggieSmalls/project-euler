import itertools


def calc_proper_divisors(n):
    return [i for i in range(1, int(n/2+1)) if n % i == 0]


def is_abundant(n):
    return sum(calc_proper_divisors(n)) > n


if __name__ == '__main__':
    abundant_numbers = [i for i in range(28123) if is_abundant(i)]
    combinations = itertools.combinations_with_replacement(abundant_numbers, 2)
    sums = {sum(combination) for combination in combinations if sum(combination) < 28123}
    integers_that_cannot_be_written_as_sum_of_two_abundant_numbers = set(range(28123)) - sums
    result = sum(integers_that_cannot_be_written_as_sum_of_two_abundant_numbers)
    print(result)
