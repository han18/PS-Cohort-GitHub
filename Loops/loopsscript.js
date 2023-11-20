// think of it as'for (starting here, going up to this point, how much to increase by each time)'
// example:
// for (let i = 0, 10, i++)

// for (let i = 0; i < 10; i++) {
//   console.log(`This is super easy ${i}`);
// }

// console.log("this is fun");

// for (let count = 0; count <= 10; count--) {
//   console.log("le");
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(`I is ${i}`);
// }

console.log("this is working");

// count fom 10 to 1

for (let i = 10; i >= 1; i--) {
  console.log(`this is number ${i}`);
}

// output odd numbers
for (let a = 0; a <= 10; a++) {
  if (a % 2) console.log(a);
}

// output even numbers
for (let x = 0; x <= 10; x++) {
  if (x % 2 == 0) console.log(x);
}

// iterating through a string
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// // for in loop
// // so char is a variable and str is a  varibale
// for (let char in str) {
//   console.log(str([char]));
// }

// continue keyword

const str1 = "Hello World";

for (let i = 0; i < str1.length; i++) {
  if (str1[i] == "l") {
    continue;
  }

  console.log(str1[i]);
}

// Exercise

// Count down to 0 from a given number.
let count = 15;

while (count > 0) {
  console.log(`Count down ${count}`);

  count--;
}

// Log integers in multiples of 3 as long as they are less than 35
//check the screenshot

let p = 0;

while (p >= 35) {
  console.log(`this is multiples of ${p}`);
  p *= 3;
}

// Print integers in multiples of 5 as long as they are less than 100.

// let z = 0;

// while (0 < 100) {
//   if (z % 5 == 0) {
//     console.log(`multiples of ${z}`);
//   }
//   z++;
// }

const str = "Hello World";

for (const i in str) {
  console.log(str[i]);
}

const cat = "Hello World";

for (const c of cat) {
  console.log(c);
}

let x = 30;

while (x > 0) {
  x /= 2;
  console.log("pass");
  x--;

  if (x % 1 != 0) {
    break;
  }

  console.log(x);
}
