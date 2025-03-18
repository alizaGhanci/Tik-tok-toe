let btn = document.querySelectorAll(".btn");
let reset = document.querySelector(".resetbtn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let newgame = document.querySelector(".new-game");

let winx = 0;
let win0 = 0;
let draw = 0;
let count = 0;
let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8],
];

turnon = true;

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnon) {
      btn.innerHTML = "0";
      turnon = false;
      btn.style.color = "orange";
    } else {
      btn.innerHTML = "x";
      turnon = true;
      btn.style.color = "rgb(6, 82, 65)";
    }
    btn.disabled = true;
    count++;

    let win = countwin();

  
    if (count === 9 && !win) {
      setTimeout(() => {
        msg.innerText = "It's a draw! Try again later";
        draw++;
        showwinner(null); // Pass null to indicate a draw
        updateWinnersList();
      }, 1000);
    }
  });
  });


reset.addEventListener("click", () => {
  enablebtn();
});

function enablebtn() {
  btn.forEach((btn) => {
    btn.disabled = false;
    btn.innerHTML = "";
  });
}
const displayboxes = () => {
  for (let box of btn) {
    box.disabled = true;
  }
};
let showwinner = (winners) => {
  displayboxes();
  setTimeout(() => {
    if (winners === "x" || winners === "0") {
      msg.innerText = `Congratulations, you are the winner! ${winners}`;
      if (winners === "x") {
        winx++;
      } else if (winners === "0") {
        win0++;
      }
      else if (winners === null) {
        msg.innerText = "It's a draw! Try again later";
        draw++;
      }
    }
    msgcontainer.classList.remove("hide"); // Show the message container
    updateWinnersList();
  }, 1000);
};
let countwin = () => {
  for (pattern of winpatterns) {
    let val1 = btn[pattern[0]].innerText;
    let val2 = btn[pattern[1]].innerText;
    let val3 = btn[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        showwinner(val1);
        setTimeout(() => {
          enablebtn();
        }, 1000);
        return val1;
      }
    }
  }
};
const game = () => {
  turnon = true;
  msgcontainer.classList.add("hide");
  resetgame();
};
const resetgame = () => {
  btn.disabled = false;
  btn.innerHTML = "";
};

newgame.addEventListener("click", game);

const ul = document.getElementById("mylist");

if (ul.style.display === "none") {
  ul.style.display = "block";
  updateWinnersList();
  // Show the list
} else {
  ul.style.display = "none";
  // Hide the list
}
function updateWinnersList() {
  document.getElementById("win1").innerHTML = `Player x wins: ${winx} `;
  document.getElementById("win2").innerHTML = `Player 0 wins: ${win0} `;
  document.getElementById("draw").innerHTML = ` Player Draws:${draw}`;
  ul.style.borderTop = "1px  dotted white";
  ul.style.borderRadius = "5px";
  ul.style.position = "relative";
  ul.style.padding = "5px";
}
