var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
  console.log(this);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // debugger;
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};
  