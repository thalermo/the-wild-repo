// getting an access to the divs
let parantDiv = document.getElementById("app");
let firstDiv = document.getElementById("first-div");
let secondDiv = document.getElementById("second-div");

console.log(parantDiv);
console.log(firstDiv);
console.log(secondDiv);

// changing position using apendedchild

parantDiv.appendChild(secondDiv);
parantDiv.appendChild(firstDiv);
