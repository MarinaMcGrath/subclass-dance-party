class BouncyDancer extends Dancer {
    constructor(top, left, timeBetweenSteps) {
        super(top, left, timeBetweenSteps);
    }

    step() {
        this.setPosition(300, 50);
        Dancer.prototype.step.call(this);
        this.$node.toggle();
    }
}