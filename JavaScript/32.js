// https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
// https://projecteuler.net/problem=32

// function perm(arr) {
//   let ret = []
//   for (let i = 0; i < arr.length; i++) {
//     const rest = perm(arr.slice(0, i).concat(arr.slice(i + 1)))
//
//     if (rest.length === 0) {
//       ret.push(arr[i])
//     } else {
//       for (let j = 0; j < rest.length; j++) {
//         ret.push([arr[i]].concat(rest[j]))
//       }
//     }
//   }
//   return ret
// }

function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if (!rest.length) {
      ret.push([xs[i]])
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}

const products = new Set()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const permutation of perm(arr)) {
  for (let i = 1; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      const a = Number(permutation.slice(0, i).join(''))
      const b = Number(permutation.slice(i, j).join(''))
      const c = Number(permutation.slice(j).join(''))

      if (a * b === c || a * c === b || b * c === a) {
        products.add(Math.max(a,b,c))
      }
    }
  }
}

console.log([...products].reduce((a, b) => a + b, 0))
