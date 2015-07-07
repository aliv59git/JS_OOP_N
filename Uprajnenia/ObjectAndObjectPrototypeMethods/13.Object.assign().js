/* Object.assign() */
// Polyfill
if(!Object.assign){
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true, 
    value: function (target) {
      'use strict';
      if(target === undefined || target === null){
        throw new TypeError('Cannot convert first argument to object');
      }
      var to = Object(target);
      for (var i = 1; i < arguments.length; i+=1) {
        var nextSource = arguments[i];
        if(nextSource === undefined || nextSource === null){
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0; nextIndex < keysArray.length; nextIndex+=1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if(desc !== undefined && desc.enumerable){
            to[nextKey] = nextSource[nextKey];
          }
        };
      };
        return to;

    }
  });
}

//Cloning an object
(function (){
  var obj = {a: 1}, 
      copy = Object.assign({}, obj);
  console.log(copy);
}());

// Merging objects
(function (){
  var obj,
  o1 = {a: 1},
  o2 = {b: 2},
  o3 = {c: 3};

  obj = Object.assign(o1, o2, o3);
  console.log(obj);
  console.log(o1);

  obj = Object.assign({}, o1, o2, o3);
  console.log(obj);
  console.log(o1);


}());




