// You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.

const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

console.log(area);

const plant = 0.8;
const plantGrowth = 20;
const weeks = 4;
// creating the percentage of the growth
percentage = weeks / 100;
const plantPerWeek = plantGrowth * weeks;
console.log(plantPerWeek);

// if (plantPerWeek * plant) {
//   console.log("Pruned");
// } else if (plantPerWeek > 0.5 && plantPerWeek < plant) {
//   console.log("Monitored");
// } else if (plantPerWeek >= 50) {
//   console.log("Planted");
// }

// using a switch statement

let x = 2;

switch (x * plantPerWeek && plantPerWeek > plant) {
  case "1":
    console.log("Pruned");
    break;

  case "2":
    console.log(Monitored);
    break;
}
