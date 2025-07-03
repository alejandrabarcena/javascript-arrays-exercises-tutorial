let people = [
  { name: "Joe", birthDate: "1987-10-01" },
  { name: "Bob", birthDate: "1976-01-10" },
  { name: "Erika", birthDate: "1990-07-20" },
  { name: "Dylan", birthDate: "2000-05-15" },
  { name: "Steve", birthDate: "2004-03-12" }
];

let simplifier = function(person) {
  let birth = new Date(person.birthDate);
  let today = new Date();
  let age = today.getFullYear() - birth.getFullYear();

  let monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--; // Si aún no ha cumplido años este año
  }

  return `Hello, my name is ${person.name} and I am ${age} years old`;
};

let newArray = people.map(simplifier);
console.log(newArray);
