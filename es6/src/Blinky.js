class Blinky extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.append($('<img src="gifs/Blinky.gif" class="dancer-img"/>'));
    this.setPosition(top, left);
  }

  step() {
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  }

}
window.Blinky = Blinky;