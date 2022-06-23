const primesSmallerOrEqualTo = require('./10')

function nthTriangularNumber(n) {
    return n * (n + 1) / 2
}

function calcDivisorsOfNumber(n) {
    const divisors = new Set()
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.add(i)
            divisors.add(n / i)
        }
    }
    return divisors
}

/*
* this is actually pretty bad in performance, so we don't use it*/
function findHighlyDivisibleTriangularNumberV1(numberOfDivisors) {

    let n = 1
    let triangleNumber = nthTriangularNumber(n)
    let divisors = calcDivisorsOfNumber(triangleNumber)
    while (divisors.size < numberOfDivisors) {
        n += 1
        triangleNumber = nthTriangularNumber(n)
        divisors = calcDivisorsOfNumber(triangleNumber)
        console.log(n)
    }
    return triangleNumber
}

/*
* This is much faster because it only goes through a fraction of the numbers */
function findNumberOfDivisors(n) {
    let m = n ** 0.5
    let result = 0
    for (let i = 1; i <= m; i++) {
        if (n % i === 0) result += 2
    }
    if (Math.trunc(m) ** 2 === n) result -= 1  // if the number is a cube, we "accidentally" add it twice to the number of divisors
    return result
}


function findHighlyDivisibleTriangularNumberV2(numberOfDivisors) {
    let n = 1
    while (findNumberOfDivisors(nthTriangularNumber(n)) < numberOfDivisors) n++
    return nthTriangularNumber(n)
}

if (require.main === module) {
    console.log(findHighlyDivisibleTriangularNumberV2(500))
}
