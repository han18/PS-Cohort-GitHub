// Dec 8, 2023.. this is for Encapsulation creating private classes
// you will get a syntax error if trying to access a property with a # number tag hash

class Learner {
  #grades = [];
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }
  // creating a getter method
  //   creating a function... only read only property
  //   creating this to read the private value without the # in the console
  get name() {
    return `${this.#name.first}`;
  }

  // getting the private for read only value
  get age() {
    return this.#age;
  }
  // this is a setter that pushes a new grade into the array
  set grades(grade) {
    grade = Number(grade);
    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }
  }
  // returns the arrays grades
  get grades() {
    return this.#grades;
  }

  // add many private grades
  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);
      // numbers not grater or less than the indicated numbers assigned
      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
  // get the average by dropping the lowest grade from the grade array
  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

const learner1 = new Learner("Leeroy", "Jenkins", 18);

console.log(learner1.name);
// you could add but not change
learner1.age = 22;
console.log(learner1.age);
console.log(learner1);
learner1.grades = 220;

// the array will be logged flat with no [] because of the flat() method
learner1.addGrades([95, 100, 77], [96, 89]);
console.log(learner1);
console.log(learner1.average); // 95 is the value because of the array I pushed into the grades
