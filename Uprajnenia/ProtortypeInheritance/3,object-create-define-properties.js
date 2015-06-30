var animal = {
  makeNoise: function (){
    console.log('The ' + this.type + ' make noise "' + this.noise + '"');
  }
};

var dog = (function (parent){
  var dog = Object.defineProperties(parent, {
    type: {
      value: 'dog'
    },
    noise: {
      value: 'Djaff, djaff, says my dog!'
    },
    bark: {
      value: function(){
        console.log('Bark, bark');
      }
    }
  });
  return dog;
}(animal));

dog.makeNoise();
console.log(dog.bark());
