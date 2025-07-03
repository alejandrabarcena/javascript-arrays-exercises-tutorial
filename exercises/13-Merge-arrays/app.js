let array1 = ['Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin'];
let array2 = ['Darnell', 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas'];

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);
