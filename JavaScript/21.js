function sumOfProperDivisors(n) {
    const sqrt = Math.sqrt(n)
    let sum = 1  // start with 1
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            sum += i
            sum += n / i
        }
    }
    if (Number.isInteger(sqrt)) sum -= sqrt  // count square root once in sum of factors
    return sum
}
module.exports = sumOfProperDivisors

if (require.main === module) {
    const arr = new Array(10_000)
    const MAX = 10_000
    for (let i = 2; i < MAX; i++) {
        if (arr[i] === undefined) {
            let a = i
            let b = sumOfProperDivisors(a)
            let c = sumOfProperDivisors(b)
            if (a !== b && a === c && a < MAX && b < MAX) {
                arr[a] = true
                arr[b] = true
            } else {
                arr[a] = false
            }
        }
    }

    let result = 0
    for (let i = 2; i < MAX; i++) {
        if (arr[i]) result += i
    }
    console.log(result)
}

