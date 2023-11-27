// working with data collection

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// creating a function to expand the selection of columns
const stringArray = function (array) {
  let addArray = array.push([]);
};

let stringCVS =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// using the split method to split the string
let splitCVS = stringCVS.split("\n");

// looping through each row using split method to create an array
for (let cvs = 0; cvs < splitCVS.length; cvs++) {
  // splitting the row into cells
  let cells = splitCVS[cvs].split(","); // removing the comma
  //   converting the string into an array

  // Log each row of data since now it's considered an array reference the index
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
