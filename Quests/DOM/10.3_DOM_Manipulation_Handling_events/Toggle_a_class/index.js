// Experiment
// In this example, we have a button and a list of animals emoji. This list has the property display: none.
//* Adding the class visible on the element will change it to display: block.

//* Using what we've learned, create a listener on the button; on click, toggle the class visible on the dropdown-menu-content (using the toggle method).

// access to the dropdown-menu
let dropdownDiv = document.querySelector(".dropdown-menu-content");
console.log(dropdownDiv); //works!!

// access to the btn
let dropdownBtn = document.querySelector(".dropdown-btn");
console.log(dropdownBtn);

// test without click
// dropdownDiv.classList.toggle("visible"); // works!!!

/// put everything with eventListener
dropdownBtn.addEventListener("click", function () {
  dropdownDiv.classList.toggle("visible");
});

// Works!!!!
