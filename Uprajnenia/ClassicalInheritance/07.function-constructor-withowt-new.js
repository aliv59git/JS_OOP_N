function Rect(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.calcArea = function(){
  return this.width * this.height;
};
Rect.prototype.calcPerimeter = function(){
  return 2*(this.width + this.height);
};

var realRect = new Rect(23, 45, 20, 50);
var badRect = new Rect(23, 45, 20, 50);
console.log('With new: '+realRect.calcArea());
console.log('Without new: '+badRect.calcPerimeter());
