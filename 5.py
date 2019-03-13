n = 20
seen = set()


def factors(x):
    result = {}
    i = 2
    while i * i <= x:
        if x % i:
            i += 1
        else:
            if i in result:
                result[i] += 1
            else:
                result[i] = 1
            x //= i
    if x > 1:
        if x in result:
            result[x] += 1
        else:
            result[x] = 1
    return result


r = {}
for i in range(2, n+1):
    r2 = factors(i)
    for key, v in r2.items():
        if r.get(key, 0) < r2[key]:
            r[key] = r2[key]

result = 1
for k, v in r.items():
    result = k**v * result
print(result)
