// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);
  // console.log('INSIDE DANCER');
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};