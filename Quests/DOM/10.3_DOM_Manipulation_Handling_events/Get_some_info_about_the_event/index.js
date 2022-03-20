// Experiment
// Use your DOM knowledge to display and update the position of the mouse anytime the user moves the mouse on the screen.
// You need to use innerHTML and a template string to change the text of title-cursor-position.

//* pseudo code
// create a cl with 2 vars for x and y
let xPosition;
let yPosition;
// register the data in the vars
// innerHTML to put the text in h3
let h3CursorPosition = document.querySelector("#title-cursor-position");
console.log(h3CursorPosition);
// big question, how to store the data in a var

let title = document.querySelector(".title");

title.addEventListener("click", function (event) {
  console.log(event);
  title.style.color = "red";
});

document.body.addEventListener("mousemove", function (event) {
  // console.log(event.screenX); // works!
  // adding the data to the empty vars X Y position
  xPosition = event.clientX;
  yPosition = event.clientY;
  // console.log(yPosition, xPosition); // works!!
  h3CursorPosition.innerHTML = `X: ${xPosition} - Y: ${yPosition}`;
});
