class Jumpy extends Dancer {
    constructor(top, left, timeBetweenSteps) {
        super(top, left, timeBetweenSteps);
        this.top = top;
        this.left = left;
        this.up = false;

        this.$node.append($('<img src="gifs/Jumpy.gif" class="dancer-img"/>'));
        this.setPosition(top, left);
    }

    step() {
        Dancer.prototype.step.call(this);
        if (!this.up) {
            this.setPosition(this.top - 50, this.left);
            this.up = true;
        } else {
            this.setPosition(this.top, this.left);
            this.up = false;
        }
    }
}

window.Jumpy = Jumpy;