const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
])

function countNumberOfLetters(n) {
    if (n > 1000 || n < 1 || !Number.isInteger(n)) throw "Number must be an integer between 1 and 1000"
    if (n === 1000) return 'one'.length + 'thousand'.length
    if (map.has(n)) return map.get(n).length

    let result = 0
    if (n / 100 >= 1) {
        result += map.get(Math.floor(n / 100)).length + 'hundred'.length
        n %= 100
    }
    if (n === 0) return result  // case n = 100, 200, ...
    result += 'and'.length
    if (map.has(n)) {
        result += map.get(n).length
        return result
    } else {
        result += map.get(n - n % 10).length + map.get(n % 10).length
        return result
    }
}

function writeNumberAsString(n) {
    if (n > 1000 || n < 1 || !Number.isInteger(n)) throw "Number must be an integer between 1 and 1000"
    if (n === 1000) return 'one' + 'thousand'
    if (map.has(n)) return map.get(n)

    let result = ''
    if (n / 100 >= 1) {
        result += map.get(Math.floor(n / 100)) + 'hundred'
        n %= 100
    }
    if (n === 0) return result  // case n = 100, 200, ...
    result += 'and'
    if (map.has(n)) {
        result += map.get(n)
        return result
    } else {
        result += map.get(n - n % 10) + map.get(n % 10)
        return result
    }
}


let result = 0
for (let i = 1; i <= 1000; i++) {
    console.log(i, writeNumberAsString(i))
    result += countNumberOfLetters(i)
}
console.log(result)
