// Part 1 - Selecting elements to modify.
var jumbotron = document.querySelector(".jumbotron");
var donateBike = document.querySelector("#donateBtn");
var volunteer = document.querySelector(".btn-secondary");

// Adding button functions.
var blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", fBlue);
function fBlue() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBike.style.backgroundColor = "#f0ad4e";
  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
}

var orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", fOrange);
function fOrange() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBike.style.backgroundColor = "#5751fd";
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "white";
}
var greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", fGreen);
function fGreen() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBike.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8c9c08";
}

//Part 2

var mailBox = document.querySelector("#exampleInputEmail1");
var nameBox = document.querySelector("#example-text-input");
var textBox = document.querySelector("#exampleTextarea");
var submitBtn = document
  .querySelector("#submitBtn")
  .addEventListener("click", formSubmit);
function formSubmit() {
  if (mailBox.value === "") {
    mailBox.style.backgroundColor = "red";
  } else if (nameBox.value === "") {
    nameBox.style.backgroundColor = "red";
  } else if (textBox.value === "") {
    textBox.style.backgroundColor = "red";
  } else {
    alert("Thank you for filling out the form.");
  }
}
