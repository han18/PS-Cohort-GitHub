// Data Collections
// created a repository for
let movies = ["Case 39", "Beauty & The Beast", "Toys Story"];
console.log(movies);
console.log(movies[2]);
console.log(movies.length);

movies[1] = "Batman";
console.log(movies);

movies[10] = "Cats";
console.log(movies);
console.table(movies);

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

movies.push("Dignity"); // add element
console.log(movies);

movies.pop("Baby Laugh"); // move element
console.log(movies);

let myMovies = ["Joker", "Home ALone"];
let myMoviePlus = movies.concat(myMovies);

console.log(myMoviePlus);

const myHome = ["dishwasher", "oven", "microwave"];

for (let myCase = 0; myCase < myHome.length; myCase++) {
  console.log(`I will have:  ${myHome[myCase]} `);
}
