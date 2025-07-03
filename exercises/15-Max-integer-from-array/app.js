function findMax(arr) {
    let max = arr[0]; // Inicializa con el primer número del array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Reemplaza si encuentra uno mayor
        }
    }

    return max;
}

// Ejemplo de prueba:
let myArray = [5, 23, 12, 5435, 87, 32];
console.log(findMax(myArray)); // ➜ 5435
