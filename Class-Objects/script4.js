// working on my own way of code
const myDiv = document.getElementById("div");
const myForm = document.getElementById("form");
const myInput = document.getElementById("input");
const myButton = document.getElementById("button");

class goodPeople {
  constructor(name, age, personality) {
    this.name = name;
    this.age = age;
    this.personality = personality;
  }
}

const people = [];

myForm.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("h1").textContent = "Yemen";
  console.log(myForm);
});

function displayResults() {
  const div = document.createElement("div");
  const myh2 = document.createElement("h2");
  const myh3 = document.createElement("h3");

  myh2.textContent = "hi there";
  myh3.textContent = "Hey I'm Head three";

  div.appendChild(myh2);
  div.appendChild(myh3);

  myDiv.appendChild(div);
}

console.log(displayResults());

const nyPeople = new goodPeople("Hanan", 23, "Super Sweet");
console.log(nyPeople);

people.push("Hanan");
people.push("Sana");
people.push("Elias");

console.log(people);
