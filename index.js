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

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, [
    new Side(sideOneLength),
    new Side(sideTwoLength),
    new Side(sideThreeLength),
    new Side(sideFourLength),
  ]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  Polygon.call(this, [
    new Side(sideOneLength),
    new Side(sideTwoLength),
    new Side(sideThreeLength),
  ]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
  let properties = [];

  for (const prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(prop);
      properties.push(prop);
    }
  }

  return properties.toString();
};
