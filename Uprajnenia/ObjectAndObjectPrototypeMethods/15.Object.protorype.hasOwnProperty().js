/* Object.prototype.hasOwnProperty() */
// Using hasOwnProperty to test for a property's existence
(function (){
  o = new Object();
  o.prop = 'exists';

  function changeO() {
    o.newprop = o.prop;
    delete o.prop;
  }

  console.log('"o" has property "prop": ' + o.hasOwnProperty('prop'));
  changeO();
  console.log('"o" has property "prop": ' + o.hasOwnProperty('prop'));

}());

// Direct versus inherited properties
(function (){
  var o = new Object();
  o.prop = 'exists';
  console.log('"o" has property "prop": ' + o.hasOwnProperty('prop'));
  console.log('"o" has property "toString": ' + o.hasOwnProperty('toString'));
  console.log('"o" has property "hasOwnProperty": ' + o.hasOwnProperty('hasOwnProperty'));
}());

// Iterating over the properties of an object
(function (){
  var biz = {
    fog: 'stack'
  };

  for (var name in biz) {
    if (biz.hasOwnProperty(name)) {
      console.log('this is fog (' + name + ') for sure. Value: ' + biz[name]);
    } else {
      console.log(name); // toString or something else
    }
  }
}());

// hasOwnProperty as a property
(function (){
  var foo = {
    hasOwnProperty: function (){
      return false;
    }, 
    bar: 'Here be dragons'
  };

  console.log('"foo" has property "bar": ' + foo.hasOwnProperty('bar')); //always return false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
  console.log('"foo" has property "bar": ' + ({}).hasOwnProperty.call(foo, 'bar')); //true

// It's also possible to use the hasOwnProperty property from the Object prototype for this purpose
  console.log('"foo" has property "bar": ' + Object.prototype.hasOwnProperty.call(foo, 'bar')); //true
  
})
