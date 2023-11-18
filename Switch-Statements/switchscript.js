// let a = "2";

// switch (a) {
//   case "1":
//     console.log("this value is a string 1");
//     break; // if you don't have the break it executes to the next value.

//   case "2":
//     console.log("this value is a string 2");
//     break;

//   default:
//     console.log("No value");
// }

// Switch Statement are for one case
// let x = 5;
// let y = 4;
// let operand = "*";
// switch (operand) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);
//     break;
//   case "*":
//     console.log(x * y);
//     break;
//   case "/":
//     console.log(x / y);
//     break;
//   default:
//     console.log("Invalid Operand");
//     break; // not necessary
// }

// Ternary Operators
// its a single line of an if and else statement
// the question mark is the (if statement) the colon (: is the else statement)
// it's best to check one condition if or else

// let day= "friday"

// const message = (day === "friday") ?

// Errors

// let x = 10;

// if (x < 0) {
// 	console.log("Negative!");
// } else {
// 	throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");

// try catching an error

let x = 10;

try {
  if (x > 0) {
    let isEven = x % 2 == 0 ? true : false;
  } else if (x <= 0) {
    throw "Error - Value of 0 or below.";
  }

  console.log(isEven);
} catch (err) {
  console.log(err);
} finally {
  console.log(x);
}
