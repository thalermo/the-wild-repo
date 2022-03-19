// Add/Remove a class to an element
// It's also possible to add/remove a class on an element.
//* 🔬 Experiment:
// In this page, there are already some small boxes, and they have a specific CSS class box. Create a new box element with createElement add to this element the class box and then add it to the div container-boxes.

//* create a new box element with createElement
let newBox = document.createElement("div");
console.log(newBox);

//* add to this element the class box
newBox.classList.add("box");
console.log(newBox);

//* and then add it to the div container-boxes.
// Access to the box container div
let containerBoxes = document.querySelector(".container-boxes");
console.log(containerBoxes);

containerBoxes.appendChild(newBox);
