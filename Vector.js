function Vector(x, y) {
  this.x = x;
  this.y = y;
  //this.lastX = x;
  //this.lastY = y
}

Vector.prototype.getX = function() {
  return this.x;
};

Vector.prototype.getY = function() {
  return this.y;
};

Vector.prototype.setX = function(x) {
  this.x = x;
}

Vector.prototype.setY = function(y) {
  this.y = y;
}

Vector.prototype.addX = function(x) {
  this.x += x;
};

Vector.prototype.addY = function(y) {
  this.y += y;
};

Vector.prototype.getLast = function() {
    return new Vector(this.lastX, this.lastY);
};

Vector.prototype.setLast = function(x,y) {
  this.lastX = x;
  this.lastY = y;
};
