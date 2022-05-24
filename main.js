const choices = ["rock", "paper", "scissors"];
const userChoice = prompt("choose rock, paper, scissors");

if (userChoice) {
  console.log(`you choose ${userChoice}`);
} else {
  alert("you must choose one!");
}

const randomNum = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNum];
console.log(`computer chooses ${computerChoice}`);

if (userChoice === computerChoice) {
  console.log(`no one wins!`);
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log("you win!");
  } else {
    console.log("you lose!");
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("you win!");
  } else {
    console.log("you lose");
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "paper") {
    console.log("you win!");
  } else {
    console.log("you lose");
  }
}
