n = 10

def smallest_divisor(x):
    for i in range(2,int(x**0.5)):
        if x%i == 0:
            return i
    return x

s = set()

def prime_factors(x):
    result = set()
    d = smallest_divisor(x)
    if d == x:
        result.add(d)
        return result
    else:
        return result | prime_factors(x/d)

print(prime_factors(21))
#for i in reversed(range(n)):
