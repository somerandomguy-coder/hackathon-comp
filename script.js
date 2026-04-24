const actionButton = document.getElementById("actionButton");
const buttonStatus = document.getElementById("buttonStatus");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const formOutput = document.getElementById("formOutput");

let clickCount = 0;

actionButton.addEventListener("click", () => {
  clickCount += 1;
  buttonStatus.textContent = `Button clicked ${clickCount} time(s)`;
});

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = nameInput.value.trim();
  formOutput.textContent = value
    ? `Hello, ${value}!`
    : "Please enter a name before submitting.";
});
