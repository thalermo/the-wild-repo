//* Solution Nr. 1
// getting an access to the dogs pictures
let dogsImg = document.querySelectorAll(".img-dog");
console.log(dogsImg);

// Remove all the dogs pictures with loop
for (let i = 0; i < dogsImg.length; i++) {
  dogsImg[i].remove();
}
