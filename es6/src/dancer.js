class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this._timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }

  step(callback) {
    var that = this;
    setTimeout(() => 
      that.step(), this._timeBetweenSteps);
  }

  setPosition(top, left, css = {}) {
    this.$node.css(Object.assign(css, {top:top, left:left, border: 0}));
  }
}

window.Dancer = Dancer;