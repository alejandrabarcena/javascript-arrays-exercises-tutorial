let binaryArray = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let yesNoArray = binaryArray.map(value => {
  return value === 1 ? 'wiki' : 'woko';
});

console.log(yesNoArray);
