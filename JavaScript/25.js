let a, b
a = b = 1

let i = 2
while ([...String(b)].length < 1000) {
    [a, b] = [BigInt(b), BigInt(a + b)]
    i++
}

console.log(i)
