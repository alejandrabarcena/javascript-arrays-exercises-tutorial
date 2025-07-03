let allNames = ['Rachel', 'Monica', 'Phoebe', 'Ross', 'Joey', 'Chandler', 'Raúl'];

let resultingNames = allNames.filter(function(name) {
  return name.startsWith('R');
});

console.log(resultingNames);
