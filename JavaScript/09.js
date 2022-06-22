
function specialPythagoreanTriplet() {
    let a = 1
    // condition applies that c < a + b + 2*a*b
    // and a < b < c
    // therefore "a" has to be lower than 250
    while (a < 1000) {
        // c < a + b + 2*a*b
        // 1000 - a - b < a + b + 2*a*b
        // 1000 < 2*a + 2*b + 2*a*b
        // 500 < a + b + a*b
        // 500 < a + b*(a + 1)
        // 500 < (a+1) + b*(a + 1)
        // therefore the lowest value for b that makes sense to check is 500/(a+1)
        for (let b = a + 1; 500 / (a + 1) < b && b < (1000 - a) / 2; b++) {
            const c = 1000 - a - b
            if (a ** 2 + b ** 2 === c ** 2) {
                return a * b * c
            }
        }
        a++
    }
}

console.log(specialPythagoreanTriplet())
