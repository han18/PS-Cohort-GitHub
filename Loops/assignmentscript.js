// for the assignment / coding along with Abraham

//first loop over the string using a for loop

const cvs =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

for (let i = 0; i < cvs.length; i++) {
  console.log(cvs[i]);
}

// store each cell in a variable
// if is a comma move to the next row
