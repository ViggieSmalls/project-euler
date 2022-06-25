function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return factorial(n - 1) * n
}

module.exports = factorial

if (require.main === module) {
    // to arrive to destination in an n*n grid, we need to go n times down and n times to the right
    // so in total we have n+n steps. We have to calculate all permutations to pick out n out of 2*n, that is
    // (2*n)! / (n! * n!)
    const n = 20
    result = factorial(n*2) / factorial(n)**2
    console.log(result)
}