arr = [...Array(1000).keys()]
arr = arr.filter(n => n % 3 === 0 | n % 5 === 0)
result = arr.reduce((a,b) => a+b)
console.log(result)
