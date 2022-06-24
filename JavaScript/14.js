const cache = Array(1000000 + 1)
cache[1] = 1

function calcCollatzSequenceLengthFor(n) {
    // if n is memoized return value
    if (cache[n]) return cache[n]
    // if n is even: n -> n/2
    // if n is odd: n -> 3n + 1
    let result
    if (n % 2 === 0) {
        result = 1 + calcCollatzSequenceLengthFor(n / 2)
    } else {
        result = 1 + calcCollatzSequenceLengthFor(3 * n + 1)
    }
    cache[n] = result
    return result
}

let max = 0
let result
for (let i = 1; i < 1000000; i++) {
    const length = calcCollatzSequenceLengthFor(i)
    if (max < length) {
        max = length
        result = i
    }
}
console.log(result)
