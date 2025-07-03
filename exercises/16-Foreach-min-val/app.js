let myArray = [54, 23, 78, 120, 45, 89];
let min = Number.POSITIVE_INFINITY; // Valor inicial muy grande

myArray.forEach(function(item) {
    if (item < min) {
        min = item;
    }
});

console.log(min); // ➜ 23
