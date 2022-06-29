const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let result = 0
let day = 0

for (let year = 1900; year < 2001; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        months[1] = 29
    } else {
        months[1] = 28
    }
    for (let month of months) {
        day += month % 7
        if (day % 7 === 6 && year > 1900) result++
    }
}

console.log(result)
