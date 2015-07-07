(function () {
	var empty = {};
	console.log('is "empty" extensible: ' + Object.isExtensible(empty));

	Object.preventExtensions(empty);
	console.log('is "empty" extensible: ' + Object.isExtensible(empty));

	var sealed = Object.seal({});
	console.log('is "sealed" extensible: ' + Object.isExtensible(sealed));

	var frozen = Object.freeze({});
	console.log('is "frozen" extensible: ' + Object.isExtensible(frozen));

}());