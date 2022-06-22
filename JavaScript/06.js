// The sum of the squares of the first ten natural numbers is 385
//
// The square of the sum of the first ten natural numbers is 3025
//
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// (a + b + c + d + ...)² - (a² + b² + c² + d² + ...) = 2 * a * (b + c + d + ...) + 2 * b * (c + d + ...) + ...)
// a + b + c + ... = N * (N + 1) / 2

const N = 100
let result = 0
for (let n = 1; n <= N; n++) {
    // result += 2 * n * (N * (N + 1) / 2 - n * (n + 1) / 2)
    result += n * (N * (N + 1) - n * (n + 1))
}
console.log(result)
