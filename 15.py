d = {}
n = 20
for i in range(n+1):
    for j in range(n+1):
        if i == 0 or j == 0:
            d[tuple([i, j])] = 1
        else:
            d[tuple([i, j])] = d[tuple([i-1, j])] + d[tuple([i, j-1])]

print(d[tuple([20, 20])])
