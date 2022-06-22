function getFirstNPrimeNumbers(N) {
    const primes = []
    let n = 2
    while (primes.length < N) {
        let isPrime = true
        for (let p of primes) {
            isPrime = n % p !== 0
            if (!isPrime) break
        }
        if (isPrime) {
            primes.push(n)
        }
        n++
    }
    return primes
}
module.exports = getFirstNPrimeNumbers

primes = getFirstNPrimeNumbers(10001)
console.log(primes[10000])
