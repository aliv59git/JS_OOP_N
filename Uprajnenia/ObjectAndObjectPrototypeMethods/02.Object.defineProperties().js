(function () {
	var obj = {};
	Object.defineProperties(obj, {
		"property1": {
			value: true,
			writable: true
		},
		"property2": {
			value: "Hellow",
			writable: false
		}
		//etc. 
	});

}());