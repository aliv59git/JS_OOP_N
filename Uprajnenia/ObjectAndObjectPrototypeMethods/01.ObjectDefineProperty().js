(function () {
	var obj = {};
	Object.defineProperty(obj, 'key1', {
		__proto__: null,
		value: 'static1'
	});

	Object.defineProperty(obj, 'key2', {
		enumerable: false,
		configurable: false,
		writable: false,
		value: 'static2' 
	});

	function withValue(value){
		var d = withValue.d || (
				withValue.d = {
					enumerable: false,
					configurable: false,
					writable: false,
					value: null
				}
			);
		d.value = value;
		return d;
	}

	Object.defineProperty(obj, 'key3', withValue('static3'));

}());
