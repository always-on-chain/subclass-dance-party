var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  var BlinkyDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this);
    // console.log(this.$node)
    this.setPosition(top, left);
    this.step();
  };
  
  BlinkyDancer.prototype = Object.create(Dancer.prototype);
  BlinkyDancer.prototype.constructor = BlinkyDancer;
  
  BlinkyDancer.prototype.step = function() {
    Dancer.prototype.step.call(this, timeBetweenSteps);
    this.$node.toggle();
  };
  
  return new BlinkyDancer(top, left, timeBetweenSteps);
};