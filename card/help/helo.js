class Card {
  constructor(array, max) {
    this.array = array;
    this.max = max;
  }
  get maxNumber() {
    for (let i = 0; i <= this.max; i++) {
      return Math.floor(Math.random() * this.max);
    }
  }
}

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let card1 = new Card(array1, 10);
let card2 = new Card(array2, 10);

console.log(card1.maxNumber); // Returns 7
console.log(card2.maxNumber); // Returns 6

if (card1.maxNumber > card2.maxNumber) {
  console.log("hi");
}
