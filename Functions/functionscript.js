// declaring a function ... and giving it parameter
// function addTwoNumbers()

// calling the function
// addTwoNumbers()

// this is a complete function when I call it it prints out HI
function sayHi() {
  console.log("HI");
}

// calling the function sayHi()
sayHi();

function nameMe(name) {
  console.log(`Your name is ${name}`);
}

//calling the function and passing a value
nameMe("Hanan");
nameMe("Fadah");

// way to declare a function
// fnDeclaration(); // thank you function declarations :)
// fnExpression(); // TypeError: fnExpression is not a function

// function fnDeclaration() {
//   console.log("I'm coming from a function declaration.");
// }

// // function called after this function expression is declared
// // const fnExpression = function () {
// //   console.log("I'm coming from a function expression.");
// // };

// function Arrow

function add(a, b) {
  //   console.log(a + b); return
  return a + b;
}

add(1, 3); // the position matter

// arrow
const results = add(2, 3);
console.log(results);

// Exercise

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

// I consoled it without catching into a variable
console.log(areBothEven(4, 6)); // true because both arguments are even number

//Practice Activity 1: Write a Function Declaration
//Write a function named computeArea using the function declaration approach.

function size(width, height) {
  theSize = width * height;
  console.log(
    `The area of a rectangle with a width of ${width} and a height of ${height} is ${theSize} square units.`
    // I should have returned it with the return and backticks
  );
}

size(3, 6);

// Arguments Array like +==================
// function getDevObject(name) {
//   //   console.log(name);
//   //   console.log(arguments[3]);
//   const skills = [];
//   for (let i = 0; i < arguments; i++) {
//     // adding one by one by looping each argument
//     skills.push(arguments[i]);
//   }
//   return {
//     devName: name,
//     jobSkills: skills, // catch the arguments in here
//   };
// }

// // can call mulit
// const getObject = getDevObject("Maria", "Html", "js");

// console.log(getObject);
//========================

console.log("===================================");

function fruits(apples, bananas) {
  const juice = apples + bananas;
  console.log(juice);

  return juice;
}

fruits(5, 2);
fruits(10, 2);

// calculating taxes
function calTaxes(tax) {
  const taxPrice = tax * 0.08 + tax;
  return taxPrice;
}

console.log(calTaxes(115));

// creating a juice processor

const multiFruit = function (juice) {
  return juice * 2;
};

const calFruits = function (apples, oranges) {
  const appleFruits = multiFruit(apples);
  const orangeFruits = multiFruit(oranges);

  return `I have ${appleFruits} apples and ${orangeFruits} oranges`; // I could have stored this into a variable and returned the variable. either wat it works
};

console.log(calFruits(2, 4));
console.log(calFruits(10, 6));

/// flowing class lesson

// default parameter
function setColor(bike, color = "black") {
  // you can pass multi selection of defaults
  bike.color = color; // the color is set to black if user does'nt chose a color
}

const b1 = {}; // to pass in the value to the object

setColor(b1, "red"); // the color passed in here if color is selected
console.log(b1);

// function as arguments means they are wrapped in objects to preform

console.log();

// IIFE runs a function once the page loads
(function () {
  /// code here
})(); // this parentheses to invoke the function

// pass by

let myVar = 20;

function passBy(myVar) {
  myVar = myVar * 10;
  return myVar;
}
console.log(myVar); // 20
console.log(passBy(myVar)); // 200
console.log(myVar);
