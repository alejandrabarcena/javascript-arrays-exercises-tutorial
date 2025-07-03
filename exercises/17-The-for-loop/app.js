let myArray = [234, 645, 1234, 9483, 28394, 342, 78, 1];
let total = 0;

for (let num of myArray) {
    total += num;
}

let promedio = total / myArray.length;
console.log(promedio); // Resultado esperado: 27278.8125
