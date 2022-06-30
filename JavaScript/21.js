function d(n) {
    let sum = 1  // start with 1
    for (let i = 2; i < n ** 0.5; i++) {
        if (n % i === 0) {
            sum += i
            sum += n / i
        }
    }
    if (Number.isInteger(n ** 0.5)) sum -= n ** 0.5  // case n is cube
    return sum
}

const arr = new Array(10_000)
const MAX = 10_000
for (let i = 2; i < MAX; i++) {
    if (arr[i] === undefined) {
        let a = i
        let b = d(a)
        let c = d(b)
        if (a !==b && a === c && a < MAX && b < MAX) {
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
