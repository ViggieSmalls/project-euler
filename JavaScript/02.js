arr = []
arr.push(0)
arr.push(1)
const MAX_N = 4000000
while (arr[arr.length - 1] <= MAX_N) {
    let fibonacci_n = arr[arr.length - 1] + arr[arr.length - 2]
    if (fibonacci_n > MAX_N) {
        break
    } else {
        arr.push(fibonacci_n)
    }
}

arr = arr.filter(n => n % 2 === 0)
result = arr.reduce((a,b) => a + b)
console.log(result)
