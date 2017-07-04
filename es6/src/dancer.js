class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this._timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  };

  step() {
    var that = this;
    setTimeout(() => 
      that.step(), this._timeBetweenSteps);
  };

  setPosition(top, left) {
    const styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
};