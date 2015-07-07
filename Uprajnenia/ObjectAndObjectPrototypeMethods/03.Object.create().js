(function (){
	function Shape(){
		this.x = 0;
		this.y = 0;
	}

	Shape.prototype.move = function (x, y){
		this.x += x;
		this.y += y;
		console.info('Shape moved.');
	};

	function Rectangle () {
		Shape.call(this);
	}

	Rectangle.prototype = Object.create(Shape.prototype);
	Rectangle.prototype.constructor = Rectangle;

	var rect = new Rectangle();

	console.log('Is rect instance of Rectangle?' + (rect instanceof Rectangle));
	console.log('Is rect an instance of Shape?' + (rect instanceof Shape));
	rect.move(1,1); 

}());

(function (){
	var o;
	o = Object.create(null);
	o = {};
// is equivalent to:
	o = Object.create(Object.prototype);

	o = Object.create(Object.prototype, {
		foo: {
			writable: true,
			configurable: true,
			value: 'hello'
		}, 
		bar: {
			configurable: false,
			get: function(){
				return 10;
			}, 
			set: function (value) {
				console.log('Setting `o.bar` to', value);
			}
		}
	});

	function Constructor() {

	}

	o = new Constructor();
//is equivalent to
	o = Object.create(Constructor.prototype);
//create a new object whose prototype is a new, empty object
//and adding single property 'p', with value 42;
	o = Object.create({}, {p: {value: 42}});

// by default properties ARE NOT witable, enumerable or configurable: 
	o.p = 24;
	console.log(o.p);
	o.q = 12;
	for (var prop in o) {
		console.log(prop); 
	}

	delete o.p;

	console.log(o.p)
}());