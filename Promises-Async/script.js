// console.log("Hello");

// console.log("One");

// setTimeout(() => console.log("Two"), 0);

// console.log("Three");

// // Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Guess this worked!");
//   }, 1000);
// });

// // Add some then() methods to handle additional tasks.
// myPromise
//   .then((x) => x + " Again?")
//   .then((x) => x + " Third time!")
//   .then((x) => x + " Promises are cool.")
//   .catch((err) => {
//     console.error(err);
//   });

// console.log(myPromise);

// new Promise((resolve, reject) => {
//   console.log("Initial");

//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");

//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   });

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("My favorite yogurt");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demo");
  innerHTML = value;
});

console.log(myPromise);

/// my first promise
const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve("You DID IT!"); // Yay! Everything went well!
  }, 3000); // this delays the output of the results
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
});
