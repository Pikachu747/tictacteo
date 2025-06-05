console.log("Welcome to Tic Tac Toe");

let turn = "X";
let isGameOver = false;

const changeTurn = () => (turn === "X" ? "O" : "X");

const checkWin = () => {
  const spantext = document.getElementsByClassName("spantext");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      spantext[e[0]].innerText !== "" &&
      spantext[e[0]].innerText === spantext[e[1]].innerText &&
      spantext[e[1]].innerText === spantext[e[2]].innerText
    ) {
      alert(spantext[e[0]].innerText + " has won!");
      isGameOver = true;
    }
  });
};

const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  const spantext = element.querySelector(".spantext");
  element.addEventListener("click", () => {
    if (spantext.innerText === "" && !isGameOver) {
      spantext.innerText = turn;
      checkWin();
      if (!isGameOver) turn = changeTurn();
    }
  });
});
