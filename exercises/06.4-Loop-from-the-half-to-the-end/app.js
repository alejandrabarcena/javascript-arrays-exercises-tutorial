let mySampleArray = [232, 32, 1, 44, 100, 23, 48, 56432, 55, 23, 25, 12];

// Cambios clave aquí 👇
let initialValue = mySampleArray.length / 2; // desde la mitad
let stopValue = mySampleArray.length; // hasta el final
let increasingValue = 1; // de uno en uno

for (let i = initialValue; i < stopValue; i += increasingValue) {
  console.log(mySampleArray[i]);
}
