// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

let x = 600851475143
let n = 2
let prime_factors = []
while (x !== 1) {
    if (x % n === 0) {
        prime_factors.push(n)
        x /= n
    } else {
        n += 1
    }
}
result = Math.max(...prime_factors)
console.log(result)
