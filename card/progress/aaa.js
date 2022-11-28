let arrya = [];
let arryb = [];

function card_a() {
  a = Math.floor(Math.random() * 100);
  return a;
}

function game() {
  for (let j = 0; j <= arrya.length; j++) {
    if (arrya[j] != arryb[j]) {
      if (arrya[j] > arryb[j]) {
        console.log("one" + " " + "win" + " " + " the game");
        // const a_win = document.createElement("p");
        // a_win.innerText = "player one win ";
        // document.body.appendChild(a_win);
      } else {
        console.log("tow" + " " + "win" + " " + "the game");
        // const b_win = document.createElement("p");
        // b_win.innerText = "player tow win ";
        // document.body.appendChild(b_win);
      }
    }
  }
}

let element = document.getElementById("player1");
element.addEventListener("click", () => {
  document.getElementById("");
  arrya.push(card_a());
  // game();
  console.log(arrya);
  // + " " + "arrya = one player"
});
// ========================================================================================
let element2 = document.getElementById("player2");
element2.addEventListener("click", () => {
  arryb.push(card_a());
  // game();
  console.log(arryb);
  // + " " + "arryb = tow player"
});
