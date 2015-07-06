(function (){
	var empty = {};
	console.log('is "empty" sealed: ' + Object.isSealed(empty));

	Object.preventExtensions(empty);
	console.log('is "empty" sealed: ' + Object.isSealed(empty));

	var hasProp = {fee: 'fie, foe, fum'};
	Object.preventExtensions(hasProp);
	console.log('is "hasProp" sealed: ' + Object.isSealed(hasProp));

// But make them all non-configurable and the object becomes sealed.
	Object.defineProperty(hasProp, 'fee', {configurable: false});
	console.log('is "hasProp" seled: ' + Object.isSealed(hasProp));

// The easiest way to seal an object, of course, is Object.seal.
	var sealed = {};
	Object.seal(sealed);
	console.log('is "sealed" sealed: ' + Object.isSealed(sealed));

// A sealed object is, by definition, non-extensible.
	console.log('is "sealed" extensible: ' + Object.isExtensible(sealed));

// A sealed object might be frozen, but it doesn't have to be.
	console.log('is "sealed" frozen: ' + Object.isFrozen(sealed)); //all properties also non-writable	

	var s2 = Object.seal({p: 3});
	console.log('is "s2" frozen: ' + Object.isFrozen(s2));  // 'p' is still writable

	var s3 = Object.seal({
		get p(){
			return 0;
		}
	});
//only configurability matters for accessor properties
	console.log('is "s3" frozen: ' + Object.isFrozen(s3));
	
}());