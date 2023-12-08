// Lab work 308A.2.1

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    friend: {
      name: "Frank",
      type: "Flea",
    },
  },
};
console.log(adventurer.inventory);

// looping through the inventory using a for of loop
for (const i of adventurer.inventory) {
  console.log([i]);
}

// to loop in the object
for (const x in adventurer) {
  console.log(x);
}
