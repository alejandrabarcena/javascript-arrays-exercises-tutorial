let mix = [42, true, "hello", { name: "Alice" }, "42", 99, [1, 2, 3]];
let types = [];

for (let i = 0; i < mix.length; i++) {
  types.push(typeof mix[i]);
}

console.log(types);
