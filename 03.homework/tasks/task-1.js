/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
	var Person = (function () {
    var minSymbols = 3,
        maxSymbols = 20;

    var isValidName = function(val){
      if(val.length < minSymbols || val.length > maxSymbols){
        throw new Error('Names length muist be beween '+ minSymbols + ' and '+ maxSymbols + ' symbols!');
      }
      if(!/^[A-Za-z]+$/.test(val)){
        throw new Error('Names must containing symbls A-Z, a-z!')
      }
    }

    var isValidAge = function(val){
      if(isNaN(val) || val < 0 || val > 150){
        throw new Error('Age must always be a number in the range 0 - 150!');
      }
    }

		function Person(fname, lname, age) {
      if(!(this instanceof arguments.callee)){
        return new Person(fname, lname, age);
      }
      isValidName(fname);
      isValidName(lname);
      isValidAge(age);

      this.firstname = fname;
      this.lastname = lname;
      this.age = age;
		}

    Object.defineProperty(Person.prototype, 'fullname', {
      get: function(){
        return this.firstname + ' ' + this.lastname;
      },
      set: function(value){
        var names = value.split(' ');
        this.firstname = names[0];
        this.lastname = names[1];
        if(isValidName(this.firstname) && isValidName(this.lastname)){
          this.fullname = value;
        }
      }
    });

    Person.prototype.introduce = function(){
       return 'Hello! My name is '+ this.fullname + ' and I am ' + this.age + '-years-old';
    }

		return Person;
	} ());
	return Person;
}
module.exports = solve;