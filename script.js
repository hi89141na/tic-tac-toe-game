let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let res = document.querySelector(".result");
let turnLabel = document.querySelector(".turn");
let turnO = true;
let turnX = false;
let gameOver = false;
let winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8]
];
//* displaying player turns
const displayTurn = () => {
    if (turnX) {
        turnLabel.innerText = "Player X turn"
    }
    else if (turnO) {
        turnLabel.innerText = "Player O turn"
    }
}
displayTurn();
//* add event listener to each box using foreach loop
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            turnX = true;
        }
        else if (turnX) {
            box.innerText = "X";
            box.style.color="#05445E"
            turnX = false;
            turnO = true;
        }
        box.disabled = true;
        displayTurn();
        if (checkWinner()) {
            if (turnO) {
                //* place the code to display the winner
                console.log("X won");
                res.innerText = "Player X Won";
                res.style.display = "flex";
            endGame();
            }
            else if (turnX) {
                //*  place the code to display the winner
                console.log("O won");
                res.innerText = "Player O Won";
                res.style.display = "flex";
            endGame();
            }
        }
        else if (checkDraw()) {
            console.log("It's a draw");
            res.innerText = "It's a Draw";
            res.style.display = "flex";
            endGame();
        }
    })
});
//* checking for draw condition
const checkDraw = () => {
    return Array.from(boxes).every(box => box.innerText !== "");
};
//* checking for winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        if (boxes[pattern[0]].disabled && boxes[pattern[1]].disabled && boxes[pattern[2]].disabled) {
            if (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText) {
                console.log(pattern[0], pattern[1], pattern[2]);
                console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
                return true;
            }
        }
    }
    return false;
}
//* reset logic
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
    turnO=true;
    turnX=false;
    displayTurn();
    res.style.display = "none";
});
//* new Game logic
newBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
    turnO=true;
    turnX=false;
    displayTurn();
    res.style.display = "none";
});
const endGame=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
    //! alert("Game Ended")
}