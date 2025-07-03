let myArray = [14, 28, 21, 10, 56, 32, 98, 7];

myArray.forEach(function(item) {
    if (item % 14 === 0) {
        console.log(item);
    }
});
