# longest Collatz sequence

cache = {}


def collatz_sequence(x):
    if x in cache:
        return cache[x]
    if x == 1:
        return 1
    elif x % 2 == 0:
        y = x/2
    else:
        y = 3*x + 1
    return collatz_sequence(y) + 1


if __name__ == '__main__':
    x = 0
    max_tmp = 0
    for i in range(1, 10**6):
        length = collatz_sequence(i)
        cache[i] = length
        if length > max_tmp:
            x = i
            max_tmp = length
    print(x, max_tmp)
