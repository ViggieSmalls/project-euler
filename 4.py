# min: 100 * 100 = 10000
# max: 999 * 999 = 998001 or 997799
# test 997799, 996699, 995599, ...

found = False
for i in reversed(range(998)):
    palindrome = int(str(i) + str(i)[::-1])
    _min = palindrome//999  # smallest possible 3 digit number
    _max = int(palindrome ** 0.5)  # biggest possible 3 digit number worth testing
    for j in reversed(range(_min,_max)):
        if palindrome%j == 0:
            print(palindrome, j)
            found = True
            break
    if found:
        break