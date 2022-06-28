const fs = require('fs')

fs.readFile('../p067_triangle.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    const arr = data.split('\n').map(a => a.split(' ').map(a => Number(a)))
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < arr.at(i).length - 1; j++) {
            const [a, b] = arr.at(i).slice(j, j + 2)
            arr[i - 1][j] += Math.max(a, b)
        }
    }
    console.log(arr[0][0])
})