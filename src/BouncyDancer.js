var BouncyDancer = function() {
    makeDancer.call(this, Math.random() * 100, Math.random() * 100, Math.random() * 100);
};
BouncyDancer.prototype = Object.create(makeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.step = function() {
    this.setPosition(50, 300);
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
};