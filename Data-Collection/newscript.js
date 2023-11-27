console.log("Hi there");

let stringCVS =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// using the split method to split the string
let splitCVS = stringCVS.split("\n");

// looping through each row using split method to create an array
for (let cvs = 0; cvs < splitCVS.length; cvs++) {
  // splitting the row into cells
  const cells = splitCVS[cvs].split(","); // removing the comma
  splitCVS.split = [];

  // Log each row of data since now it's considered an array reference the index
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
