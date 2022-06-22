// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// create an array with numbers 1...20
arr = Array(20).fill().map((v, i) => i + 1)

for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
        if (arr[j] % arr[i] === 0) {
            arr[j] = arr[j] / arr[i]
        }
    }
}
console.log(arr.reduce((a, b) => a * b))
