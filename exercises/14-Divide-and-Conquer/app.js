function mergeTwoList(arr) {
    let odd = [];   // Arreglo para impares
    let even = [];  // Arreglo para pares

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);   // Es par
        } else {
            odd.push(arr[i]);    // Es impar
        }
    }

    return odd.concat(even);  // Une primero impares, luego pares
}

// Ejemplo de prueba
console.log(mergeTwoList([1, 2, 33, 10, 20, 4]));
