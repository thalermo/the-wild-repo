// Try to change a few things on this code :

//* When the user clicks on the image, it should change the image source and the alt text

// change img and alt?
// adding the hover event

// access to the property img src

let changeImg = document.querySelector(".img-dogs");
console.log(changeImg);
// changeImg.src =
//   "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/11/10093442/Pug-puppy-sitting-outdoors.jpg";

// adding eventListener to the img
changeImg.addEventListener("click", function () {
  //click works!
  console.log("click");
  // works as well 🤩
  changeImg.src =
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/11/10093442/Pug-puppy-sitting-outdoors.jpg";
});

//* When the user hover the title, it should change the color of the text

// get an access to the h1
let h1Access = document.querySelector(".title");
console.log(h1Access);

// adding an event listener

h1Access.addEventListener("mouseenter", function () {
  // test works!!!
  console.log("hover");
  //works !
  h1Access.style.color = "blue";
});

//* When the mouse leaves the title, the color should be back to black

// Helping link "https://claborghini.medium.com/javascript-add-and-remove-an-event-listener-mouseover-mouseout-9adc7ac1c20"

h1Access.addEventListener("mouseout", function () {
  h1Access.style.color = "black";
});
