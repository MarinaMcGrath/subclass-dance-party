var SlidingDancer = function() {
    makeDancer.call(this, Math.random() * 100, Math.random() * 100, Math.random() * 100);
};
SlidingDancer.prototype = Object.create(makeDancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;
SlidingDancer.prototype.step = function() {
    this.setPosition(50, 100);
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
};