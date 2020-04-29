/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

var p = document.querySelectorAll("p");
console.log(p);

var div = document.querySelector("div");
console.log(div);

var jumbotron = document.querySelector("#jumbotron-text");
console.log(jumbotron);

var primary = document.querySelectorAll(".primary-content p");
console.log(primary);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var bgn = document.querySelector("body");
var bgnChange = document.querySelector("#bgrChangeBtn");
bgnChange.addEventListener("click", changeColor);

function changeColor() {
  bgn.style.backgroundColor = "red";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var myElement = document.querySelector(".heading-underline");
var addSomeText = document.querySelector("#addTextBtn");
addSomeText.addEventListener("click", addText);

function addText() {
  var textBox = document.createElement("p");
  myElement.appendChild(textBox);
  textBox.innerText = "ADDED SOME TEXT";
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var links = document.querySelectorAll("a");
var largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", enlargeText);

function enlargeText() {
  for (var i = 0; i < links.length; i++) {
    links[i].style.fontSize = "125%";
  }
}
