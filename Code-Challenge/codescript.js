console.log("code challenge");

// Print all even numbers from 0 – 10

for (let x = 0; x <= 10; x++) {
  if (x % 2 == 0) {
    console.log("I am even " + x);
  }
}
// Passed

// Print a table containing multiplication tables

const tabM = 10;
for (let m = 1; m <= tabM; m++) {
  for (let r = 1; r <= tabM; r++) console.log(m * r);
}

// Calculate the sum of numbers within an array

const sum = [1, 2, 3, 4, 6, 8, 9]; //33

for (let s = 1; s < sum.length; s++) {
  console.log(sum + s);
}
