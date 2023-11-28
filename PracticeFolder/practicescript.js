// created an independent function that finds the average
// this is an arrow function
const calcAverage = (a, b, c) => a + b + c / 3;

// created a variable that checks the score of each two
let scoreDolphins = calcAverage(33, 55, 88);
let scoreKoalas = calcAverage(56, 78, 46);

// created a independent function that does the calculation
function calcWinner(avgDolphines, avgKoala) {
  if (avgDolphines >= 2 * avgKoala) {
    console.log(`Dolphin's win by ${avgDolhines}`);
  } else if (avgKoala >= 2 * avgDolphines) {
    console.log(`Kolas's win ${avgKoala}`);
  } else {
    console.log("No team wins");
  }
}

calcWinner(scoreDolphins, scoreKoalas);
calcWinner(345, 765);

// called arguments
function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills,
  };
}

console.log(getDevObject("hanan", "Software", "Business", "Marketing"));

let myVar = 20;

function passBy(x) {
  x = x * 10;
  return x;
}
