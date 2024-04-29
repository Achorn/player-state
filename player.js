import { StandingLeft, StandingRight } from "./state.js";

export default class Player {
  constructor(gameW, gameH) {
    this.gameWidth = gameW;
    this.gameHeight = gameH;
    this.states = [new StandingLeft(this), new StandingRight(this)];
    this.currentState = this.states[0];
    this.image = document.getElementById("dogImage");
    this.width = 200;
    this.height = 181.83;
    this.x = this.gameWidth / 2 - this.width / 2;
    this.y = this.gameHeight - this.height;
    this.frameX;
    this.frameY;
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update(input) {
    this.currentState.handleInput(input);
  }
  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
}
