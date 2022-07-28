const target = 200
let result = 0

for (let a = target; a >= 0; a -= 200) {
  for (let b = a; b >= 0; b -= 100) {
    for (let c = b; c >= 0; c -= 50) {
      for (let d = c; d >= 0; d -= 20) {
        for (let e = d; e >= 0; e -= 10) {
          for (let f = e; f >= 0; f -= 5) {
            for (let g = f; g >= 0; g -= 2) {
              result++
            }
          }
        }
      }
    }
  }
}

console.log(result)