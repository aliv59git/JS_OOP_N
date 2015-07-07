(function (){
// A new object is extensible, so it is not frozen.
	console.log('is "{}" frozen: ' + Object.isFrozen({}));

// An empty object which is not extensible is vacuously frozen.
	var vacuouslyFrozen = Object.preventExtensions({});
	console.log('is "vacuouslyFrozen" frozen: ' + Object.isFrozen(vacuouslyFrozen));

// A new object with one property is also extensible, ergo not frozen.
	var oneProp = {p: 42};
	console.log('is "oneProp" frozen: ' + Object.isFrozen(oneProp));

// Preventing extensions to the object still doesn't make it frozen,
// because the property is still configurable (and writable).		
	Object.preventExtensions(oneProp);
	console.log('is "oneProp" frozen after preventing extensions: ' + Object.isFrozen(oneProp));

// ...but then deleting that property makes the object vacuously frozen.	
	delete oneProp.p;
	console.log('is "oneProp" frozen after deleting "p": ' + Object.isFrozen(oneProp));

// A non-extensible object with a non-writable but still configurable property is not frozen.
	var nonWritable = {e: 'plep'};
	Object.preventExtensions(nonWritable);
	Object.defineProperty(nonWritable, 'e', {writable: false}); // make non-writable
	console.log('is "nonWritable" frozen with e non-writable: ' + Object.isFrozen(nonWritable));

// Changing that property to non-configurable then makes the object frozen.
	Object.defineProperty(nonWritable, 'e', {configurable: false}); // make non-configurable
	console.log('is "nonWritable" frozen with e non-configurable: ' + Object.isFrozen(nonWritable));

// A non-extensible object with a non-configurable but still writable property also isn't frozen.
	

}());