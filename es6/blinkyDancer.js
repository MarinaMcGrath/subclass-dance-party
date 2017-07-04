class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }

  step() {
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  }

}