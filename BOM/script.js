// Create your game here!

const appBody = document.getElementById("app");
const guessMe = document.getElementById("guessbox");

const paragraph = app.appendChild(document.createElement("p"));

paragraph.textContent = "This is a guessing game";

let guessNumber = Number(prompt("choose a number from 1 to 20"));

let secretNumber = Math.trunc(Math.random() * 10);

if (guessNumber === secretNumber) {
  document.querySelector(".message").textContent = "YOU GOT IT";
} else if (guessNumber !== secretNumber) {
  console.log((document.querySelector(".message").textContent = "TRY AGAIN"));
}
