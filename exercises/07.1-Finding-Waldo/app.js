let people = ["Maria", "juan", "WALDO", "peter", "waldo", "lucia"];

for (let i = 0; i < people.length; i++) {
  if (people[i].toLowerCase() === "waldo") {
    console.log("👀 Waldo está en la posición:", i);
  }
}
