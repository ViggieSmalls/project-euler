function primesSmallerOrEqualTo(n, precalculatedPrimes) {
    const primes = precalculatedPrimes ? precalculatedPrimes : []
    const maxPrime = primes.length ? primes[primes.length - 1] : 2
    for (let i = maxPrime; i <= n; i++) {
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

function main() {
    const primes = primesSmallerOrEqualTo(2000000)
    console.log(primes.reduce((a, b) => a + b))
}

if (require.main === module) {
    main()
}