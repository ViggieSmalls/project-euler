monday = 0
sunday = 6

D, M, Y = 1, 1, 2001

d, m, y = 1, 1, 1900
Jan, Feb, Mar, Apr, Mai, Jun, Jul, Aug, Sep, Okt, Nov, Dec = 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
weekday = monday

result = 0
while (d, m, y) != (D, M, Y):

    # morning dawn
    if y < 1901:
        pass
    else:
        if weekday == sunday and d == 1:
            result += 1

    # the day passes
    d += 1
    weekday = (weekday + 1) % 7

    # fix calendar
    n_days_in_the_month = (Jan, Feb, Mar, Apr, Mai, Jun, Jul, Aug, Sep, Okt, Nov, Dec)[m - 1]
    if m == 2 and y % 4 == 0 and (not y % 100 == 0 or y % 400 == 0):
        n_days_in_the_month += 1

    if d > n_days_in_the_month:
        d = 1
        m += 1

    if m > 12:
        m = 1
        y += 1


print(result)
