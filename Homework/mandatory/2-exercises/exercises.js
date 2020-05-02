/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (var i = 0; i < arrayOfPeople.length; i++) {
    var name = document.createElement("h1");
    content.appendChild(name);
    name.innerText = arrayOfPeople[i].name;
    var job = document.createElement("h2");
    content.appendChild(job);
    job.innerText = arrayOfPeople[i].job;
  }
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
  var shoppingList = document.createElement("ul");
  content.appendChild(shoppingList);
  for (var i = 0; i < shopping.length; i++) {
    var item = document.createElement("li");
    shoppingList.appendChild(item);
    item.innerText = shopping[i];
  }
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  var content = document.querySelector("#content");
  var list = document.createElement("ul");
  content.appendChild(list);
  list.style.display = "flex";
  for (var i = 0; i < books.length; i++) {
    var listItem = document.createElement("li");
    var titleAuthor = document.createElement("p");
    var image = document.createElement("img");
    list.appendChild(listItem);
    listItem.appendChild(titleAuthor);
    listItem.appendChild(image);
    image.src = books[i].url;
    if (books[i].alreadyRead) {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "red";
    }
    titleAuthor.innerText = books[i].title + " - " + books[i].author;
  }
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "./design_of.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "./most_human.jpeg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "./pragmatic.jpeg",
  },
];

exerciseThree(books);
