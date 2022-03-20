const name = "John Doe";
const age = 26;
const passions = ["Ski", "Hiking", "Cinema"];
console.log(name, age, passions);

function displayPassions() {
  console.log(`My passions are :`);
  for (let i = 0; i < passions.length; i++) {
    console.log(`- ${passions[i]}`);
  }
}

// Info ready to deliver!
module.exports = {
  name: name,
  age: age,
  displayPassions: displayPassions,
};
