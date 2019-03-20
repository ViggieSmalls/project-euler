found = False
for a in range(1, 1000-(2*1+1)):
    if found:
        break
    for b in range(a+1, 1000-(2*a+1)):
        if found:
            break
        c = 1000 - a - b
        if a*a+b*b == c*c:
            print(a*b*c)
            print(a, b, c)
            found = True
