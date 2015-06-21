var factorial = function factorial(n){
	if(n === 0){
		return 1;
	}
	return n*factorial(n-1);
};

console.log(factorial(6));

var fact = factorial;
console.log(fact(6));

factorial = function (){
	return 'NOT FACTORIAL';
};

console.log(fact(6));
console.log(factorial(66));
