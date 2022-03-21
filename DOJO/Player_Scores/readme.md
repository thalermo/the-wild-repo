# DOJO 2

## Part 1

Given this array:

```javascript
const scores = [
  {
    player: "Zelma",
    score: 290,
  },
  {
    player: "Sanchez",
    score: 140,
  },
  {
    player: "Marisa",
    score: 134,
  },
  {
    player: "Black",
    score: 610,
  },
  {
    player: "Rivera",
    score: 575,
  },
  {
    player: "Workman",
    score: 462,
  },
  {
    player: "Nolan",
    score: 321,
  },
];
```

Write a function updateScore(scores, player, modifier) that returns an array with the modifier applied to the specified player's score.

i.e.
updateScore(scores, "Sanchez", 100)
will return:

```javascript
const scores = [
  {
    player: "Zelma",
    score: 290,
  },
  {
    player: "Sanchez",
    score: 240, // used to be 140, but after calling the fn it is 240
  },
  {
    player: "Marisa",
    score: 134,
  },
  {
    player: "Black",
    score: 610,
  },
  {
    player: "Rivera",
    score: 575,
  },
  {
    player: "Workman",
    score: 462,
  },
  {
    player: "Nolan",
    score: 321,
  },
];
```

## 2 part

Write a function podium(scores) that will return an array with the 3 best scores sorted by score. The highest score goes first
