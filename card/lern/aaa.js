let arrya = [];
let arryb = [];

for (let i = 0; i <= 5; i++) {
  function crad_a(max) {
    a = Math.floor(Math.random() * max);
    return a;
  }
  // console.log(crad_a(10));

  function crad_b(max) {
    b = Math.floor(Math.random() * max);
    return b;
  }
  // console.log(crad_b(10));
  i++;

  arrya.push(crad_a(100));
  arryb.push(crad_b(100));
}
console.log(arrya);
console.log(arryb);

for (let j = 0; j <= arrya.length; j++) {
  if (arrya[j] != arryb[j]) {
    if (arrya[j] > arryb[j]) {
      console.log("a" + " " + "win" + " " + " the game");
    } else {
      console.log("b" + " " + "win" + " " + "the game");
    }
  }
}
let element = document.getElementById("player1");
element.addEventListener("click", () => {
  let print1 = (document.getElementById("resultp").innerHTML = arrya[0]);
});

let element2 = document.getElementById("player2");
element2.addEventListener("click", () => {
  for (let p = 0; p <= arryb.length; p++) {
    // let print2 = (document.getElementById("resultp2").innerHTML = arryb[p]);
    console.log(arryb[p]);
  }
});
