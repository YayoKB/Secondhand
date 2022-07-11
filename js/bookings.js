const form = document.getElementById("booking-form");
const message = document.getElementById("submit-message");
const email = document.getElementById("Email");
const cellNo = document.getElementById("Cellphone");
const altNo = document.getElementById("Alt");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidNumber = (number) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return re.test(String(number).toLowerCase());
};

function validateInputs() {
  const emailValue = email.value.trim();
  const cellValue = cellNo.value.trim();
  let valid = true;

  if (emailValue === "") {
    setError(email, "Email is required");
    valid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    valid = false;
  } else {
    setSuccess(email);
  }

  if (cellValue === "") {
    setError(cellNo, "Cellphone number is required");
    valid = false;
  } else if (!isValidNumber(cellValue)) {
    setError(cellNo, "Provide a valid cellphone number");
    valid = false;
  } else {
    setSuccess(cellNo);
  }

  if (valid === false) {
    return false;
  } else {
    message.style.display = "block";
  }
}
