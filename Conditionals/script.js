// connecting conditionals

// const user = 'alex';

// if (user) {
//     console.log(`Welcome ${user}`);
// } else {
//     console.log('Welcome Guest');
// }

// if (42) {
//       console.log("true");
//     }
//     if ("0") {
//       console.log("true");
//     }
//     if ("false") {
//       console.log("true");
//     }
//     if (-0) {
//       console.log("true?");
//     }
//     if (Infinity) {
//       console.log("true");
//     }
//     if (" ") {
//       console.log("true?? ");
//     }

// const access = 18;

// if (access >= 18) {
//   console.log("Granted access");
// } else if (access < 18) {
//   console.log("Access Denied");
// }

// nested statement

// Nested if else

// const isLoggedIn = true;
// const isAdmin = true;

// if (isLoggedIn) {
//   console.log("Welcome!");

//   if (isAdmin) {
//     console.log("Admin User"); //if Admin is true
//   } else {
//     console.log("Default User"); // if
//   }
// } else {
//   console.log("You must be logged in!");
// }
// conditional statement test
// const num = 43;

// if (num >= 43) {
//   if (num >= 45 && num > 100) {
//     console.log("This is a positive number and greater than 100");
//   }
// } else {
//   console.log("This is a number");
// }

const learner = 65;

if (learner >= 90) {
  console.log("A");
} else if (learner >= 80 && learner < 90) {
  console.log("B");
} else if (learner >= 70 && learner < 80) {
  console.log("C");
} else if (learner >= 55 && learner < 70) {
  console.log("D");
} else if (learner < 55) {
  console.log("F");
}
