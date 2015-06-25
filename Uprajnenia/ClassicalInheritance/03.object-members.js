function Rect(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.calcArea = function(){
    return this.width * this.height;
  };

  this.calcPerimeter = function(){
    return this.width*2 + this.height*2;
  };
}

var rects = [
  new Rect(23, 24, 5, 17),
  new Rect(20, 30, 15, 6),
  new Rect(11, 22, 18, 50),
  new Rect(10, 10, 20, 50)
]
for (var i = 0; i < rects.length; i+=1) {
  console.log('Area of rect # '+ (i+1) + ' is: ' + (rects[i]).calcArea());
  console.log('Perimeter of rect # '+ (i+1) + ' is: ' + (rects[i]).calcPerimeter());
};