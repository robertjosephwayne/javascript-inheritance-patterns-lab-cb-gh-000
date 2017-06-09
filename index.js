function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`;
};

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
};

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
};

function Side(length) {
  this.length = length;
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return (this.radius * 2);
};

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
};

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  let totalPerimeter = 0;

  this.sides.forEach((side) => {
    totalPerimeter += side.length;
  });

  return totalPerimeter;
};

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};
