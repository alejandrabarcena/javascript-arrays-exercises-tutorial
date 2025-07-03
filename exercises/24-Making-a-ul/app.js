let allColors = ["Red", "Blue", "Green", "Orange", "Pink", "Violet", "Brown"];

function filterColors(color) {
  let sexyColors = ["Red", "Orange", "Pink", "Violet"];
  return sexyColors.includes(color);
}

function generateLI(color) {
  return `<li>${color}</li>`;
}

let filteredColors = allColors.filter(filterColors);
let htmlList = "<ul>" + filteredColors.map(generateLI).join('') + "</ul>";

console.log(htmlList);
