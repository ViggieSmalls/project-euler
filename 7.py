def is_prime(x):
    i = 2
    while i*i <= x:
        if x % i:
            i += 1
        else:
            return False
    return True


n = 0
i = 2
while n != 10001:
    if is_prime(i):
        n += 1
    i += 1

print(i-1)
