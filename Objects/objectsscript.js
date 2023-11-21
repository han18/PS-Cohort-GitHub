// object

const myCar = {
  color: "Blue",
  hp: 4000,
  isElectric: false,
  available: ["xx", " hx", "lk"],
  year: 2023,
  engine: {
    cylinder: 4,
  },
  color: "Hot pink", // it over rights the pervious key and value
};

console.log(myCar);

console.log(myCar["color"]);
console.log(myCar.isElectric); // dot notation
console.log(myCar.year);
console.log(myCar.engine.cylinder); // access within the object

console.log(myCar.available[2]); // for the array

//doing some changes by the dot notation
myCar.hp = 500;
console.log(myCar);

myCar.color = "Silver";
console.log(myCar);

// delete property

delete myCar.isElectric;
console.log(myCar);

// iterating through an object

for (let key in myCar) {
  console.log(myCar[key]);
}

// const myList = [["Chips", 20] ["Candy", 10 ] ["Bread", 5] ["Chocolate", 4] ["Cake", 2] ["Dressing", 3]];
