// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

let n = 1
let found = false
let x, y

function isPalindrome(number) {
    const s = String(number)
    let i = s.length
    while (i > s.length / 2) {
        if (s[i-1] !== s[s.length - i]) {
            return false
        }
        i -= 1
    }
    return true
}
module.exports = isPalindrome

while (found === false) {
    let i = (n - n % 2) / 2
    let j = n - i
    while (i >= 0) {
        x = 999 - i
        y = 999 - j
        found = isPalindrome(x * y)
        if (found) break
        i -= 1
        j += 1
    }
    n += 1
}

console.log(x*y)
