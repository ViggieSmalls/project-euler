const primesSmallerOrEqualTo = require('./10')

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

test("Array of primes lower than x", () => {
    expect(arraysEqual(primesSmallerOrEqualTo(10), [2, 3, 5, 7])).toBe(true)
    expect(arraysEqual(primesSmallerOrEqualTo(11), [2, 3, 5, 7, 11])).toBe(true)
})
