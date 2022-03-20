// We are going to create a small website for cat adoption.

// With dom manipulation, we can create easily some HTML elements without having to recreate them over and over.

// In this exercise, you will see how we can generate cards from an array of objects easily.

// In the following codesandbox, you will find a JavaScript file called index.js in this JavaScript file, you will find an array with a list of cats to adopt:

// const cards = document.querySelector(".cards");

// const animalsToAdopt = [
//   {
//     name: "Lucky",
//     picture: "https://placekitten.com/200/287",
//   },
//   {
//     name: "Symba",
//     picture: "https://placekitten.com/200/139",
//   },
//   {
//     name: "Léo",
//     picture: "https://placekitten.com/200/90",
//   },
//   {
//     name: "Milo",
//     picture: "https://placekitten.com/200/194",
//   },
//   {
//     name: "Charly",
//     picture: "https://placekitten.com/200/179",
//   },
// ];

//* Our goal here is to create one card for each animal.
//*  That way, if we want to add a new animal to the list, we will simply have to add a new object in the array.

// For that, we need a function, because we don't want to run the same code over and over. To make this exercise more simple, we already created the function for you.

// function createCard(title, imageUrl) {}
//   const card = document.createElement("div");
//   card.classList.add("card");
//   cards.appendChild(card);

// Each card will have a different title and a different imageUrl.
// To create new DOM elements, we have to use document.createElement(). We add a couple of example on how to proceed.

//   const cardHeader = document.createElement("div");
//   cardHeader.classList.add("card-header");
//   card.appendChild(cardHeader);

//   const cardImg = document.createElement("div");
//   cardImg.style.backgroundImage = `url(${imageUrl})`;
//   cardImg.classList.add("card-img");
//   cardHeader.appendChild(cardImg);
// }

// Database

let cardsInventory = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287",
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139",
  },
  {
    name: "Léo",
    picture:
      "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194",
  },
  {
    name: "Charly",
    picture:
      "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
  },
];

function createCard(title, imageUrl) {
  let newCardDiv = document.createElement("div");
  newCardDiv.classList.add("card");
  cardsInventory.appendChild(newCardDiv);
  // console.log(newCardDiv);
  let newCardHeader = document.createElement("div");
  newCardHeader.classList.add("card-header");
  newCardDiv.appendChild(newCardHeader);
  // console.log(newCardHeader);
  // console.log(newCardDiv);
  let divImg = document.createElement("div");
  divImg.classList.add("card-img");
  newCardHeader.appendChild(divImg);
  divImg.style.backgroundImage = `url(${imageUrl})`; //!function parameter
  // console.log(divImg);
  // console.log(newCardHeader);
  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");
  newCardDiv.appendChild(cardBodyDiv);
  // console.log(cardBodyDiv);
  let h2Title = document.createElement("h2");
  h2Title.classList.add("card-title");
  cardBodyDiv.appendChild(h2Title);
  h2Title.innerHTML = title; //! function parameter
  // console.log(h2Title);

  let cardBtn = document.createElement("button");
  cardBtn.classList.add("card-button");
  cardBodyDiv.appendChild(cardBtn);
  cardBtn.innerHTML = "Adopt Now";
}

for (let i = 0; i < animalsToAdopt.length; i++) {
  createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture);
  console.log(animalsToAdopt[i].name, animalsToAdopt[i].picture);
}

// console.log(document); // doesn't help to check the new divs.

// *Calling all the new elements
//newCardDiv
//newCardHeader

// cardBodyDiv;
// cardBtn;

// console.log(divImg);
// console.log(h2Title);
