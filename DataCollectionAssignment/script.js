console.log("hey there world");

function arrayFormat(array) {
  const addArray = array.push([]);
}

// creating the variable that holds the array
let stringCVS =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// using the split method to split the string
let splitCVS = stringCVS.split("\n");

for (let cvs = 0; cvs < splitCVS.length; cvs++) {
  // splitting the row into cells
  let cells = splitCVS[cvs].split(","); // removing the comma
  //   converting the string into an array
  // Log each row of data since now it's considered an array reference the index
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
