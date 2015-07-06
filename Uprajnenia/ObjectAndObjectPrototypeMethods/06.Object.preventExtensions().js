(function (){
	var obj = {};
	var obj2 = Object.preventExtensions(obj);
	console.log(obj === obj2);

	var empty = {};
	console.log('is "empty" extensible: ' + Object.isExtensible(empty));

	Object.preventExtensions(empty);
	console.log('is "empty" extensible: ' + Object.isExtensible(empty));

	var nonExtensible = {removable: true};
	Object.preventExtensions(nonExtensible);

	function fail(){
		'use strict';
		nonExtensible.newProperty = 'FAIL';
	}

//fail();

	console.log('is "nonExtensible" extensible?: ' + Object.isExtensible(nonExtensible));

}());