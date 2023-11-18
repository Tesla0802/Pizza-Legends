class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.querySelector("2d");
  }

  init() {
    console.log("hello from the overworld", this);
  }
}
