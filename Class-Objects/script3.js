// copied from the lesson Class and objects

// Parent or super class
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    // return is not needed because the new object is returned by default
  }
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
  toString(animal = "Animal") {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

// trying to extend a new class Cat from the official Animal class parent
class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
  }
}

const cat1 = new Cat("orange", true, false);
console.log(cat1);

class Dog extends Animal {}
class Cow extends Animal {}

// extending a new constructor for a human class

class myHuman extends Animal {
  constructor(eyes, legs, gender, occupation, age) {
    //     super("blue", 2, null, null);
    super(eyes, legs, null, null);

    this.gender = gender;
    this.occupation = occupation;
    this.age = age;
  }
}

const firstHuman = new myHuman("blue", 2, "female", "Doctor", 49);
console.log(firstHuman);

const secondHuman = new myHuman("green", 3, "male", "Teacher", 29);
console.log(secondHuman);

console.log(firstHuman.gender);
