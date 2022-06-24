const collatzSequences = new Map()
collatzSequences[1] = [1]

function calcCollatzSequenceFor(n) {
    // if n is memoized return value
    if (n in collatzSequences) return collatzSequences[n]
    // if n is even: n -> n/2
    // if n is odd: n -> 3n + 1
    let result
    if (n % 2 === 0) {
        result = [n].concat(calcCollatzSequenceFor(n / 2))
    } else {
        result = [n].concat(calcCollatzSequenceFor(3 * n + 1))
    }
    collatzSequences[n] = result
    return result
}

let max = 0
let result
for (let i = 1; i < 1000000; i++) {
    const length = calcCollatzSequenceFor(i).length
    if (max < length) {
        max = length
        result = i
    }
}
console.log(result)
