var Shape = (function(){
  function Shape(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  Shape.prototype = {
    calcArea: function(){
      return this.width * this.height;
    },
    calcPerimeter: function(){
      return 2*this.width + 2*this.height;
    }
  };

  return Shape;
}());

console.log(new Shape(5, 5, 12, 5).calcArea());
