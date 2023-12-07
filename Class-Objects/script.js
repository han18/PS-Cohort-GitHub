// console.log(this);
// const div = document.getElementById("contact-list");
// const person = {
//   username: "max",
//   age: 22,
//   role: "Developer ",
//   sayHi2: function () {
//     console.log(
//       `Hello my name is ${this.username}, I am ${this.role} and I am ${this.age} years old`
//     );
//   },
// };

// person.sayHi2();

// // the this is access the window object instead of the person object.. its pointing to the global
// // function sayHI() {
// //   console.log(
// //     `Hello my name is ${this.username}, I am ${this.role} and I am ${this.age} years old`
// //   );
// // }

// // person.sayHI = sayHI;

// // sayHI(); // pointing to the window global object
// // person.sayHI(); // now it will point to the object person instead of the window global

// div.addEventListener("click", function () {
//   console.dir();
// });

// creating a class method
class Car {
  constructor(maker, year, model) {
    this.maker = maker;
    this.year = year;
    this.model = model;
    this.speed = 100;
  }
}

increaseSpeed = function () {
  this.speed += 10;
};

const honda = new Car("honda", 2007, "civic");
console.log(honda);
console.log(honda.year);

const bmw = new Car("BMW", 2024, "Perfect");
console.log(bmw);

// the increase the speed using the the ?
// honda.increaseSpeed(); this gave me an error
console.log(honda);

//=================================

// using the constructor function to construct
// class Animal {
//   constructor(eyes, legs, isAwake, isMoving, breed, color) {
//     (this.eyes = eyes),
//       (this.legs = legs),
//       (this.isAwake = isAwake),
//       (this.isMoving = isMoving),
//       (this.breed = breed),
//       (this.color = color);

//     // return is not needed because the new object is returned by default
//   }
// }

// const cat1 = new Animal(2, 4, true, false, "Abyssinian", "orange");
// console.log(cat1);

// const cat2 = new Animal(6, 8, false, false, "catty vaf", "red");

/// home construction... home is the instance of a class
class Home {
  constructor(state, city, yearbuilt, type) {
    (this.state = state),
      (this.city = city),
      (this.yearbuilt = yearbuilt),
      (this.type = type);

    // return is not needed because the new object is returned by default
  }
}

const homeLand = new Home("New York", "Yonkers", 2020, "Multi family house");
console.log(homeLand);

const homeLand2 = new Home(
  "Massachusetts",
  "Boston",
  1900,
  "Single family house"
);
console.log(homeLand2);

class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    (this.eyes = eyes),
      (this.legs = legs),
      (this.isAwake = isAwake),
      (this.isMoving = isMoving);

    // return is not needed because the new object is returned by default
  }

  //   this is initialzed because the main constructor is defined.. these are methods to update the properties
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
}

const cat3 = new Animal("tom", 2, 4, false);
console.log(`is tom awake`, cat3.isAwake);
