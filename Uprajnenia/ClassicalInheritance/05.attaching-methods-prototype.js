function Rect(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype = {
  calcArea: function(){
    return this.width * this.height;
  },
  calcPerimeter: function(){
    return 2 * (this.width + this.height);
  }
}

var rect1 = new Rect(10, 10, 34, 45),
    rect2 = new Rect(590, 234, 34, 45);

console.log(rect1.calcPerimeter() === rect2.calcPerimeter());
console.log(rect1.calcArea() === rect2.calcArea());
