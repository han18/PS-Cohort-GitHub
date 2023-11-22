// You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.

// const radius = 5;
// const PI = 3.1415;
// const area = PI * radius * radius;

// console.log(area);

// const plant = 0.8;
// const plantGrowth = 20;
// const weeks = 4;
// // creating the percentage of the growth
// percentage = weeks / 100;
// const plantPerWeek = plantGrowth * weeks;
// console.log(plantPerWeek);

// if (plantPerWeek * plant) {
//   console.log("Pruned");
// } else if (plantPerWeek > 0.5 && plantPerWeek < plant) {
//   console.log("Monitored");
// } else if (plantPerWeek >= 50) {
//   console.log("Planted");
// }

// using a switch statement

// let x = 2;

// switch (x * plantPerWeek && plantPerWeek > plant) {
//   case "1":
//     console.log("Pruned");
//     break;

//   case "2":
//     console.log(Monitored);
//     break;
// }

// ================= Part 1: Growing Pains second try ==============

// const radius = 5;
// const PI = 3.1415;
// const area = PI * radius * radius;

// console.log(area);

// const plant = 0.8;
// const plantGrowth = 20;
// const week = 9;

// for (let x = 0; x < week.length; week++) {
//   plantGrowth *= 2;
// }

// if (plant > (0.8 * plantGrowth) / area) {
//   console.log(" Prune ");
// } else if (plant > (0.5 * plantGrowth) / area) {
//   console.log("Monitored");
// } else {
//   console.log("Planted");
// }

//////////////////////////////////
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
console.log(area);

const plantMeters = 0.8;
const plantStarts = 20;
const weeks = 4;

const plantGrowth = plantStarts * plantMeters;
const plantCount = plantGrowth + weeks;
const plantArea = plantCount * area;

if (plantArea > 0.8) {
  console.log("Pruned");
} else if (plantArea >= 0.5 && plantArea <= 0.8) {
  console.log("Monitored");
} else if (plantArea < 50) {
  console.log("Planted");
}
