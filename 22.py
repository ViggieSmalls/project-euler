import string

mapping = {a: i+1 for i, a in enumerate(string.ascii_uppercase)}


def calculate_name_worth(s):
    return sum(mapping.get(letter) for letter in s)


if __name__ == '__main__':
    with open("p022_names.txt") as f:
        names = f.read().split(",")
        names = sorted(map(lambda x: x.strip('"'), names))
        total = 0
        for n, i in enumerate(names):
            score = (n+1) * calculate_name_worth(i)
            total += score
        print(total)
