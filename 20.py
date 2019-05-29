n = 1

for i in range(1, 101):
    n *= i

ints = list(map(int, list(str(n))))
result = sum(ints)
print(result)
