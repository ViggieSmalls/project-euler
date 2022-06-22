function primesSmallerOrEqualTo(n) {
    const primes = []
    for (let i = 2; i <= n; i++) {
        let isPrime = true
        for (let p of primes) {
            isPrime = i % p !== 0
            if (!isPrime) break
        }
        if (isPrime) {
            primes.push(i)
        }
    }
    return primes
}
module.exports = primesSmallerOrEqualTo

const primes = primesSmallerOrEqualTo(2000000)
console.log(primes.reduce((a, b) => a + b))
