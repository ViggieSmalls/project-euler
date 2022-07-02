let maxChainLength = 0
let result

for (let d = 2; d < 1000; d++) {
    let i = 1
    const remainders = new Set([i])
    while (!remainders.has(i * 10 % d)) {
        i = i * 10 % d
        remainders.add(i)
    }
    if (remainders.size > maxChainLength) {
        maxChainLength = remainders.size
        result = d
    }
}

console.log(result)
