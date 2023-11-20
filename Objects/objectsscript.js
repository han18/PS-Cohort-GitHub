// object

const myCar = {
  color: "Blue",
  hp: 4000,
  isElectric: false,
  available: true,
  year: 2023,
  engine: {
    cylinder: 4,
  },
};

console.log(myCar);

console.log(myCar["color"]);
console.log(myCar.isElectric); // dot notation
console.log(myCar.year);
console.log(myCar.engine.cylinder); // access within the object
