console.log(this);
const div = document.getElementById("contact-list");
const person = {
  username: "max",
  age: 22,
  role: "Developer ",
  sayHi2: function () {
    console.log(
      `Hello my name is ${this.username}, I am ${this.role} and I am ${this.age} years old`
    );
  },
};

person.sayHi2();

// the this is access the window object instead of the person object.. its pointing to the global
// function sayHI() {
//   console.log(
//     `Hello my name is ${this.username}, I am ${this.role} and I am ${this.age} years old`
//   );
// }

// person.sayHI = sayHI;

// sayHI(); // pointing to the window global object
// person.sayHI(); // now it will point to the object person instead of the window global

div.addEventListener("click", function () {
  console.dir();
});
