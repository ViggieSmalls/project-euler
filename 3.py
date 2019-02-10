x = n = 600851475143

i = 2
l = []
while True:
    if n%i == 0:
        n = n//i
        l.append(i)
    else:
        pass
    i += 1
    if i > x**0.5:
        break

print(l)
print(max(l))
