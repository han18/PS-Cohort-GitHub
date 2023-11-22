//======================== Part 1: Fizz Buzz ===============

// Loop through all numbers from 1 to 100.

let number = 100;
for (let a = 1; a <= number; a++) {
  console.log(a);
}

// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let t = 0; t <= number; t++) {
  if (t % 3 === 0) {
    console.log("Fizz " + t);
  } else if (t % 5 === 0) {
    console.log("Buzz " + t);
  } else if (t % 3 === 0 && t % 5 === 0) {
    console.log("Fizz and Buzz " + t);
  } else if (t % 3 !== 0 && t % 3 !== 0) {
    console.log(" not divisible by 3 or 5 " + t);
  }
}

//===================== Part 2: Prime Time ==============

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

for (let n = 5; n <= 65; n++) {
  let isPrime = true;
  console.log(n); //checking n

  for (let i = 2; i < n; i++) {
    // i = 2, 3, 4
    if (n % i == 0) {
      isPrime = false; // not a prime number
      break;
    }
  }

  if (isPrime) {
    console.log(`${n} is a prime number.`);
  }
}

// Extra info: So first loop just goes over all our numbers (5-10), next we create a second for loop to then do some math, to see if our number is divisible. Its tricky because our i variable is dependent on our n variable

// statement iterates through a set of properties of an object using a specified variable. For each distinct property, JavaScript executes the statements defined within the loop.

//========================= Part 3: Feeling Loopy============

let stringCVS =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

console.log(stringCVS);

// created a ( for of ) loop
// for (const cvs1 of stringCVS) {
//   if (stringCVS[cvs1] === "\n") {
//     continue;
//   }
//   //   console.log(cvs1[stringCVS]);
// }
// to make a row using String.prototype.split()
// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const splitRow = stringCVS.split("\n");

// looping through each row using split method
for (let i = 0; i < splitRow.length; i++) {
  // splitting the row into cells
  const cells = splitRow[i].split(","); // removing the comma

  // Log each row of data since now it's considered an array
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
