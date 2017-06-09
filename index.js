function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`;
};

function Shape() {
  this.addToPlane = function(x, y) {
    this.position = Point.create(x, y);
  };

  this.move = function(x, y) {
    this.position = Point.create(x, y);
  };
}
