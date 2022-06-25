const factorial = require('./15')

test("Factorial", () => {
    expect(factorial(6)).toBe(6 * 5 * 4 * 3 * 2)
})