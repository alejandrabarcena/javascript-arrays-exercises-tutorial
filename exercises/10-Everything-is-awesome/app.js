let myArray = [0, 0, 1, 1, 0];
let return_array = [];

myArray.forEach(function(item) {
    if (item === 1) {
        return_array.push(1); // agregamos el número
    } else if (item === 0) {
        return_array.push('Yahoo'); // agregamos el string
    }
});

console.log(return_array);
