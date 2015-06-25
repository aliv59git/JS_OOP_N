function Person(name, age){
  if(!(this instanceof arguments.callee)){
    return new Person(name, age);
  }
  this.name = name;
  this.age = age;
}

var p1 = new Person(true, 12);
var p2 = new Person('With new 2', 11);
var p3 = new Person('Without new', 13);

console.log(p1);
console.log(p2);
console.log(p3);