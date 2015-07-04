var calculator = function (){
  var calculator = Object.preventExtensions({
    result: 0,
    add: function(x){
      calculator.result += +x;
      return calculator;
    },
    substract: function(x){
      calculator.result -= +x;
      return calculator;
    },
    showResult: function(){
      console.log('The result is: ' + calculator.result);
      return calculator;
    }
  });

  return {
    get: function (){
      return calculator;
    }
  };

}();

calculator.get()
  .add(7)
  .substract(-12)
  .showResult();

  calculator.get()
    .add(111)
    .substract(-3)
    .showResult();
    
calculator.get()
  .substract(234)
  .showResult();


