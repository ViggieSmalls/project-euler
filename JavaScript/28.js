let lastNumber = 1
let sum = 1

for (let i = 3; i <= 1001; i += 2) {
    for (let _ = 0; _ < 4; _++) {
        lastNumber += (i - 1)
        sum += lastNumber
    }
}
console.log(sum)
