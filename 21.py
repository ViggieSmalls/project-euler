def get_divisors_of_integer(n):
    return [i for i in range(1, int(n/2+1)) if n % i == 0]


def d(n):
    divisors = get_divisors_of_integer(n)
    return sum(divisors)


if __name__ == '__main__':
    result = 0
    sum_of_divisors = {}

    for a in range(100000):
        b = d(a)
        if d(b) == a and a != b:
            result += a

    # https://www.mathblog.dk/project-euler-21-sum-of-amicable-pairs/
    # https://www.nayuki.io/page/project-euler-solutions
    print(result)
