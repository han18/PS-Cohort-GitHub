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
