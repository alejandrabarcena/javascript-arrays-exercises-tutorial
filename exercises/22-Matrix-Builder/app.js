function matrixBuilder(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 0; j < n; j++) {
      let randomValue = Math.floor(Math.random() * 2); // 0 o 1
      row.push(randomValue);
    }

    matrix.push(row);
  }

  return matrix;
}

// Ejemplo de uso:
console.log(matrixBuilder(3));
