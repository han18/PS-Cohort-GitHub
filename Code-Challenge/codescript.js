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
