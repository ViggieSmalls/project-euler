# (a + b + c + d)² - (a² + b² + c² + d²)
#  = 2ab + 2ac + 2ad + 2bc + 2bd + 2cd
#  = 2a(b+c+d) + 2b(c+d) + 2cd

n = 100
s = n*(n+1)/2
result = 0
for i in range(1, n+1):
    s = s - i
    result = result + 2*i*s

print(result)
