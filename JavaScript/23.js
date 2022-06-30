const sumOfProperDivisors = require('./21')

const MAX = 28_123
const abundantNumbers = []
const arr = new Array(MAX).fill(false)

for (let i = 12; i < MAX; i++) {
    if (sumOfProperDivisors(i) > i) {
        abundantNumbers.push(i)
        for (let n of abundantNumbers) {
            const sum = i + n
            if (sum < MAX) arr[sum] = true
        }
    }
}
console.log(abundantNumbers.length)
let result = 0
for (let i = 0; i < MAX; i++) {
    if (!arr[i]) result += i
}
console.log(result)
