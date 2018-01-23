var VerticalDancer = function(top, left, timeBetweenSteps) {
  this.offset = top + 80.0;
  this.top = top;
  this.left = left;
  timeBetweenSteps = Math.min(timeBetweenSteps, 25.0);
  Dancer.call(this, timeBetweenSteps);
};

VerticalDancer.prototype = Object.create(Dancer.prototype);
VerticalDancer.prototype.constructor = VerticalDancer;

VerticalDancer.prototype.step = function(timeBetweenSteps) {
  // debugger;
  Dancer.prototype.step.call(this, timeBetweenSteps);
  // increment left position to a certain point
  // then go back to where we started 
  // we need a variable to track center point
  // we need a variable to track offset
  if (this.top < this.offset && !this.moved) {
    this.top += 5;
  } else {
    this.moved = true;
  }
  if (this.moved && this.top !== this.offset - 80) {
    this.top -= 5;
  } else {
    this.moved = false;
  }
  Dancer.prototype.setPosition.call(this, this.top, this.left);
  // console.log('LEFT= ' + this.left + ' | OFFSET= ' + this.offset);
  // console.log('called');
};