const word = "Hello World";
const counts = {};

for (let i = 0; i < word.length; i++) {
  let char = word[i].toLowerCase();

  if (char === " ") continue; // Ignorar espacios

  if (counts[char] === undefined) {
    counts[char] = 1;
  } else {
    counts[char]++;
  }
}

console.log(counts);
