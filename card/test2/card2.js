class card_number_one {
  constructor() {
    this.card_one = [];
    this.card_tow = [];
  }
  crad_a(max) {
    for (let d = 0; d <= 9; d++) {
      a = Math.floor(Math.random() * max);
      return a;
    }
    d++;
    this.card_one.push(crad_a(10));
  }
  crad_b(max) {
    for (let i = 0; i <= 9; i++) {
      b = Math.floor(Math.random() * max);
      return b;
    }
    i++;
    this.card_tow.push(crad_b(10));
  }

  print() {
    console.log(this.card_one);
    console.log(this.card_tow);
  }
}
console.log(card_number_one);
