class Suit {
  constructor(color, buttons, pockets, vents, vest) {
    (this.color = color),
      (this.buttons = buttons),
      (this.pockets = pockets),
      (this.vents = vents),
      (this.vest = vest);
  }
}

class SuitBuilder {
  color(color) {
    this.color = color;
    return this;
  }
  buttons(buttons) {
    this.buttons = buttons;
    return this;
  }
  pockets(pockets) {
    this.pockets = pockets;
    return this;
  }
  vents(vents) {
    this.vents = vents;
    return this;
  }
  vest(vest) {
    this.vest = vest;
    return this;
  }
  build() {
    return new Suit(
      this.color,
      this.buttons,
      this.pockets,
      this.vents,
      this.vest
    );
  }
}

const myNewSuit = new SuitBuilder()
  .color("Red")
  .buttons(6)
  .pockets(2)
  .vents(1)
  .vest(true)
  .build();
const mySecondSuit = new SuitBuilder().color("Blue").buttons(3).build();
console.log(myNewSuit);
console.log(mySecondSuit);
