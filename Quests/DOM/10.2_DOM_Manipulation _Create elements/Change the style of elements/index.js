// 🔬 Experiment:
// Try to change the CSS on this page:

// The box should be yellow, height should be 300px and width 400px
// The text should be 60px, centred and colour should be 'lightblue'

//* The box should be yellow, height should be 300px and width 400px

// Access to the box
let boxDiv = document.querySelector(".box");
console.log(boxDiv);

// changing background to yellow
// boxDiv.style.backgroundColor = "black";

boxDiv.style.backgroundColor = "yellow";

//* changing the width & height
boxDiv.style.width = "300px";
boxDiv.style.height = "400px";

console.log(boxDiv);

// The text should be 60px, centred and colour should be 'lightblue'

// access to the h1
// works !
let titleText = document.querySelector(".title");
console.log(titleText);
titleText.style.color = "blue";
titleText.style.backgroundColor = "lightblue";
titleText.style.fontSize = "60px";

//? doesn't work ?!
// titleText = document.getElementsByClassName("title");
// console.log(titleText);
// titleText.style.color = "red";

// change the text
// titleText.style.color = "blue";
