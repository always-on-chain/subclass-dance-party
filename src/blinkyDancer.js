var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};

BlinkyDancer.prototype.align = function(left) {
  this.left = left;
  Dancer.prototype.setPosition.call(this, 200, this.left);
};
