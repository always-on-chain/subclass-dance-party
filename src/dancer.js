// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

var Dancer = function(timeBetweenSteps) {
  this.$node = $('<img src="assets/astronaut.jpg" class="dancer">');
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};