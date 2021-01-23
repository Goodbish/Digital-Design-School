function printTriangle(n) {
    if (n === undefined || n < 0) {n = 5}
    for (let i = 1; i < n + 1 ; i++) {
      console.log(" ".repeat(n - i) + '# '.repeat(i))
    }
  }
  
  printTriangle();