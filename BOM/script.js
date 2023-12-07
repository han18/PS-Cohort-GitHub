// Create your game here!

const appBody = document.getElementById("app");

// appending a p element to the app div
const paragraph = app.appendChild(document.createElement("p"));

// displaying a message text
paragraph.textContent = "This is a guessing game";

// guessing a number through a prompt
let guessNumber = Number(prompt("choose a number from 1 to 10"));

// creating a random number to be guessed
let secretNumber = Math.trunc(Math.random() * 10) + 1;

// checking the condition of the number prompt input
if (guessNumber === secretNumber) {
  document.querySelector(
    ".message"
  ).textContent = `YAY! You got it! The secret number is ${secretNumber}`;
} else if (guessNumber !== secretNumber) {
  console.log((document.querySelector(".message").textContent = `Try again`));
} else {
  alert("Do it all over again");
}
