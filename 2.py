def fibonacci(n):
    if n == 1:
        return 1
    elif n == 2:
        return 2
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# TASK: find the sum of the even valued terms of the fibonacci sequence
# pattern: x even x x even x x even ...

sum = 0
i = 2
while True:
    n = fibonacci(i)
    if n < 4e6:
        sum += n
        i += 3
    else:
        break

print(sum)