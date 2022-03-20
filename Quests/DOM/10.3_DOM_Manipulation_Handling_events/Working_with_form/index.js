// 🔬Experiment
// It's your turn now, here is a form where the user can type the task he has to do. When the user clicks on the button, it should add a new li element to the todolist.

// This one is a bit harder so we'll give you what you have to do step by step (please try to do it by yourself first and look at the steps only if you struggle too much) :

// Create variables for the form, the input and the todolist (ul)
// Set an anonymous function to the form onsubmit property (with the event parameter)
// Inside the function, use event.preventDefault to prevent the page from refreshing
// Then create another variable and use createElement to create a new li node
// Inside this li element set the value of the input (using innerHTML and input.value)
// Add the li inside the ul the element you've created
// Clear the value of the input so that the text doesn't stay (input.value = "")
// Don't hesitate to try, this one is a bit more challenging but you can do it!

//* It's your turn now, here is a form where the user can type the task he has to do. When the user clicks on the button, it should add a new li element to the todolist.

//Todo: Steps...
// Add an access to the Ul.
// Add li element
// put inside the text when clicking
// add it to the parent

let ulAccess = document.querySelector("#todolist");
console.log(ulAccess); // works!

let inputAccess = document.querySelector("#todoInput");
console.log(inputAccess); // works!

let formAccess = document.querySelector("#form");
console.log(formAccess); // works!!

// Adding a new pending element
// let ilNew = document.createElement("il");
// console.log(ilNew); // works!!

// adding the onsubmit function
// Testing - works!!!
formAccess.onsubmit = function (event) {
  event.preventDefault();
  console.log("Hello, World!");
  console.log(inputAccess.value); // works!!!
  //adding some text and print in the console

  // adding the pending text in the new il to ul
  let ilNew = document.createElement("li");
  ilNew.innerHTML = inputAccess.value;
  console.log(ilNew);
  ulAccess.appendChild(ilNew);
  inputAccess.value = "";
};

// This one is a bit harder so we'll give you what you have to do step by step (please try to do it by yourself first and look at the steps only if you struggle too much) :

//(optional)
// Create variables for the form, the input and the todolist (ul)
// Set an anonymous function to the form onsubmit property (with the event parameter)
// Inside the function, use event.preventDefault to prevent the page from refreshing
// Then create another variable and use createElement to create a new li node
// Inside this li element set the value of the input (using innerHTML and input.value)
// Add the li inside the ul the element you've created
// Clear the value of the input so that the text doesn't stay (input.value = "")
// Don't hesitate to try, this one is a bit more challenging but you can do it!
