def num_divisors(x):
    m = x**0.5
    result = sum(2 for i in range(1, int(m) + 1) if x % i == 0)
    if int(m) == x**0.5:
        result -= 1
    return result


n = 1
while True:
    n += 1
    q = n*(n+1)/2
    if num_divisors(q) > 500:
        print(q)
        break
