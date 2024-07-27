let gamebox = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetgame");
let result = document.querySelector(".result");
let newgamebtn = document.querySelector(".new-gbtn");
let resetgamebtn = document.querySelector(".resetgame");

let resultContainer = document.querySelector(".winner");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turn0 = true;
  enableBoxes();
  resultContainer.classList.add("hide");
};

gamebox.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("hit");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
      box.classList.add("o");
      box.classList.remove("x");
    } else {
      box.innerText = "x";
      turn0 = true;
      box.classList.add("x");
      box.classList.remove("o");
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let posval1 = gamebox[pattern[0]].innerText;
    let posval2 = gamebox[pattern[1]].innerText;
    let posval3 = gamebox[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner");
        showWinner(posval1);
        return;
      }
    }
  }
};

const showWinner = (winner) => {
  result.innerText = `Congrates the winner is ${winner}`;
  resultContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of gamebox) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of gamebox) {
    box.disabled = false;
    box.innerText = "";
  }
};

newgamebtn.addEventListener("click", resetgame);
resetgamebtn.addEventListener("click", resetgame);
