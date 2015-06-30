var animal = {
  makeNoise: function(){
    console.log('The ' + this.type + ' make noise "' + this.noise + '"');
  }
};

var dog = {
  type: 'dog',
  noise: 'Djaff'
};

dog.__proto__ = animal;
dog.makeNoise();