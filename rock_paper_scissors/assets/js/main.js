const output = document.querySelector(".output-text");

// --- computer selection

let computersChoice;
function getRandomInteger() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerSelection() {
  const randomChoice = getRandomInteger();
  console.log({ randomChoice });
  if (randomChoice === 1) {
    return (computersChoice = "rock");
  } else if (randomChoice === 2) {
    return (computersChoice = "paper");
  } else {
    return (computersChoice = "scissors");
  }
}

console.log({ computersChoice });

let playersChoice;

const spiel = (choice) => {
  getRandomInteger();
  getComputerSelection();
  playersChoice = choice;
  console.log({ playersChoice });
  console.log({ computersChoice });
  if (playersChoice === computersChoice) {
    output.innerHTML = `<p> You Choose : ${playersChoice}</p>
    <p> CPU Choose : ${computersChoice}</p>
    <p> Result : DRAW !</p>`;
  } else if (playersChoice === "paper" && computersChoice === "scissors") {
    output.innerHTML = `<p> You Choose : ${playersChoice}</p>
    <p> CPU Choose : ${computersChoice}</p>
    <p> Result : CPU WINS !</p>`;
  } else if (playersChoice === "scissors" && computersChoice == "rock") {
    output.innerHTML = `<p> You Choose : ${playersChoice}</p>
    <p> CPU Choose : ${computersChoice}</p>
    <p> Result : CPU WINS !</p>`;
  } else if (playersChoice === "rock" && computersChoice == "paper") {
    output.innerHTML = `<p> You Choose : ${playersChoice}</p>
    <p> CPU Choose : ${computersChoice}</p>
    <p> Result : CPU WINS !</p>`;
  } else {
    output.innerHTML = `<p> You Choose : ${playersChoice}</p>
    <p> CPU Choose : ${computersChoice}</p>
    <p> Result : YOU LOOSE !</p>`;
  }
};
const restart = () => {
  output.innerHTML = "";
};
