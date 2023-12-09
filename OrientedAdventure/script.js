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

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

// creating the generic Class to hold repeated properties

class Character {
  constructor(name, type, health, inventory, roll) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.inventory = [];
    this.roll = roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
}

// logging the random roll
adventurer.roll();
// logging the full object
console.log(adventurer);

//============================
// looping through the inventory using a for of loop
for (const i of adventurer.inventory) {
  console.log([i]);
}

// to loop in the object
for (const x in adventurer) {
  console.log(x);
}
//============================
