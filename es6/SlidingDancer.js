class SlidingDancer extends Dancer {
    constructor(top, left, timeBetweenSteps) {
        super(top, left, timeBetweenSteps);
    }

    step() {
        this.setPosition(50, 300);
        Dancer.prototype.step.call(this);
        this.$node.toggle();
    }
}