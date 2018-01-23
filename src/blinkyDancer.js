var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  // console.log(this.$node)
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // debugger;
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};
  