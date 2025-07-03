function filterByName(names, filter) {
  return names.filter(function(name) {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
}

let names = [
  'Liam', 'Noah', 'Oliver', 'Elijah', 'William', 'James', 
  'Benjamin', 'Lucas', 'Henry', 'Theodore', 'Amelia', 
  'Harper', 'Evelyn', 'Camila', 'Gianna', 'Abigail', 
  'Luna', 'Ella', 'Elizabeth', 'Sofia', 'Samuel'
];

let filteredNames = filterByName(names, "li");
console.log(filteredNames);
