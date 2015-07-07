(function (){
  var Logger = (function (){
    function Logger(){
      var val = null,
          id = 1, 
          history = [];

      Object.defineProperties (this, {
        value: {
          //enumerable: true, 
          get: function (){
            return val;
          },
          set: function (value){
            history.push({ id: id, prop: value});
            id +=1;
            val = value;
          }
        },
        getHistory: {
          //enumerable: true,
           value: function (){
            return history.slice(0);
          }
        }
      });    
    }

    return Logger;
  }());

  var logger = new Logger();
  logger.value = 'asdrtgf';
  console.log(logger.value);

  logger.value = 'trey';
  console.log(logger.value); 
  logger.value = 'word';

  console.log(logger.history);
  console.log(logger.getHistory());
  console.log(logger);


}());