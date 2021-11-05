const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Add Error  
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  // add error class to form control
  formControl.className = "form-control error";
  // add message to small tag
  small.innerText = message;
};

// Remove Error 
const removeErrorFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  // remove error class from form control
  formControl.className = "form-control";
  // remove error msg from small tag
  small.innerText = "";
};

// regex for email validation
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// check input 
const checkInput = () => {
  // get the input values
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  // check input
  if (!firstNameValue) {
    // show error msg & icon
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    removeErrorFor(firstName);
  }
  if (!lastNameValue) {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    removeErrorFor(lastName);
  }
  if (!isValidEmail(emailValue)) {
    setErrorFor(email, "Looks like it is not an email");
  } else {
    removeErrorFor(email);
  }
  if (!passwordValue) {
    setErrorFor(password, "Password cannot be empty");
  } else {
    removeErrorFor(password);
  }
}

// Event Listener
form.addEventListener("submit", (e) => {
  // prevent browser default
  e.preventDefault();

  checkInput();
});