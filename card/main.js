let arrya = [];
let arryb = [];

for (let i = 0; i <= 1; i++) {
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

  arrya.push(crad_a(3));
  arryb.push(crad_b(3));
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
