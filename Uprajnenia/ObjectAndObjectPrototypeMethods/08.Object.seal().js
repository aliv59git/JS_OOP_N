(function (){
	var o, obj = {
		prop: function () {

		},
		foo: 'bar'
	};

	obj.foo = 'baz';
	obj.lumpy = 'woof';
	delete obj.prop;

	console.log(JSON.stringify(obj));
	console.log(Object.keys(obj));

	o = Object.seal(obj);

	console.log(o === obj);
	console.log(Object.isSealed(obj) === true);

	obj.foo = 'qwerqwer';
	console.log('obj.foo = ' + obj.foo);

	obj.qwer = 'the friendly duck';
	obj.foo = '1234';
	console.log('obj.qwer = ' + obj.qwer);
	console.log('obj.foo = ' + obj.foo);

	delete obj.foo;
	console.log('obj.foo = ' + obj.foo);

	obj.sparky = 'arf';
	console.log(obj.sparky);

	function fail () {
		//'use strict';
		obj.sparky = 'arf';
		console.log(obj.sparky);		
	}
	fail();

	//Object.defineProperty(obj, 'ohai', {value: 17});
	Object.defineProperty(obj, 'foo', {value: 'eit'});

	console.log('obj.foo = ' + obj.foo);


}());