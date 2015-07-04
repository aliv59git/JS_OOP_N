var controls = (function (){
  //hidden function
  function formatedResult(name, value){
    return name + ' says the result is ' + value;
  }

  var calculator = {
    init: function (name){
      this.name = name;
      this.result = 0;
      return this;
    },
    add: function (x){
      this.result += +x;
    }, 
    substract: function(x){
      this.result -= +x;
    }, 
    showResult: function (){
      console.log(formatedResult(this.name, this.result));
    }
  };

  function getCalculator(name){
    return Object.create(calculator)
        .init(name);
  }

  //returns ony a reference to the function
  return {
    getCalculator: getCalculator
  };

}());

var calc = controls.getCalculator('First');

calc.add(7+5);
calc.showResult();
calc.substract(11);
calc.showResult();