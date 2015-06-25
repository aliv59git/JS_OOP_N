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

var rect = new Rect(10, 10, 34, 45),
    rectCalcArea = rect.calcArea;

console.log(rect.calcArea());
