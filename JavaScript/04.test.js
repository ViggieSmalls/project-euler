const isPalindrome = require('./04.js')

test("Palindrome string returns true", () => {
    expect(isPalindrome(12321)).toBe(true)
    expect(isPalindrome(234432)).toBe(true)
})

test("Non-palindrome string returns false", () => {
    expect(isPalindrome(54313)).toBe(false)
    expect(isPalindrome(896131)).toBe(false)
})
