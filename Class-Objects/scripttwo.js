const contactsDiv = document.getElementById("contact-list");
const form = document.querySelector("form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");

const contacts = [];

// contact class constructor
class Contacts {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createAt = new Date(Date.now());
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newContacts = new Contacts(nameInput.value, emailInput.value);
  console.log(newContacts);

  // push a new value
  contacts.push(newContacts);
  console.log(newContacts);

  displayContact();
});

//we want to loop over contact
function displayContact() {
  contacts.forEach((contacts) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const h6 = document.createElement("h6");

    h4.textContent = contacts.name;
    h6.textContent = contacts.email;

    // appending the elements
    div.appendChild(h4);
    div.appendChild(h6);

    contactsDiv.appendChild(div);
  });
}
// console.dir(nameInput.value);
//   console.log(emailInput.value);

// form.addEventListener("submit", function (e) {
//       e.preventDefault();
//       const newContacts = {};
//       newContacts.name = nameInput.value;
//       newContacts.name = emailInput.value;

//       contacts.push(newContacts);
//       console.log(newContacts);
//     });
