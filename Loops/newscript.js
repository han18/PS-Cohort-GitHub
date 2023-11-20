// code challenge

// Part 1: Fizz Buzz
const t = 40;

for (let t = 0; t <= 100; t++) {
  if (t % 3 === 0) {
    console.log("Fizz");
  } else if (t % 5 === 0) {
    console.log("Buzz");
  } else if (t % 3 === 0 && t % 5 === 0) {
    console.log("Fizz and Buzz");
  } else if (t % 3 !== 0 && t % 3 !== 0) {
    console.log(t);
  }
}

// ===============================================
console.log("===============================================");
// Part 2: Prime Time

for (let n = 5; n <= 50; n++) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    // because n is 5 it will iterate until it hits 5
    if (n % i == 0) {
      isPrime = false; // if it's divisible it's a prime number
      break;
    }

    if (isPrime) {
      console.log("is s prime number " + n);
    }
  }
}

// Extra info: So first loop just goes over all our numbers (5-10), next we create a second for loop to then do some math, to see if our number is divisible. Its tricky because our i variable is dependent on our n variable

// statement iterates through a set of enumerable properties of an object using a specified variable. For each distinct property, JavaScript executes the statements defined within the loop.

// ==============================================
console.log("===============================================");
// Part 3: Feeling Loopy

let stringCVS =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

console.log(stringCVS);

for (const cvs in stringCVS) {
  if (stringCVS[cvs] === ",") {
    continue;
  }
  console.log(stringCVS[cvs]);
}

for (const cvs1 of stringCVS) {
  if (stringCVS[cvs1] === "\r" && stringCVS[cvs1] === "\n") {
    continue;
  }
  console.log(cvs1[stringCVS]);
}

let cvsString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Using a for of loop first method
for (let char of cvsString) {
  console.log(char);
}
// ========= new way of doing the exercise =======
// Split the CSV string into rows
const splitRow = cvsString.split("\n");

// Loop through each row
for (let i = 0; i < splitRow.length; i++) {
  // Split the row into cells
  const cells = splitRow[i].split(",");

  // Log each row of data
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
