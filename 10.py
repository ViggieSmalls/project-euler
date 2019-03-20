s = 0
primes = []


def is_prime(x, primes):
    for n in primes:
        if n**2 > x:
            break
        if x % n == 0:
            return False
    primes.append(x)
    return True


for i in range(2, int(2e6)):
    if is_prime(i, primes):
        s += i

print(s)
