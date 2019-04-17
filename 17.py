d = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
}

d = {k: len(v) for k, v in d.items()}


def len_verbose(i):
    if i in d:
        return d[i]
    else:
        hundreds = i // 100
        tens = i % 100 // 10
        ones = i % 100 % 10
        if hundreds:
            if tens == 0 and ones == 0:
                return d[hundreds] + d[100]
            else:
                return d[hundreds] + d[100] + 3 + len_verbose(tens * 10 + ones)
        elif tens:
            return d[tens*10] + d[ones]


for i in range(1, 1000):
    if i in d:
        pass
    else:
        d[i] = len_verbose(i)

result = sum(d.values()) + d[1] + d[1000]
print(result)
