/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(numbers) {
  if(numbers.length ===0){
    return null;
  }

 sum = numbers.reduce(function(sum, numb){
    numb = +numb;
    if(isNaN(numb)){
      throw new Error('');
    }
    return sum+numb;
  }, 0);
	
    return sum;	
}

module.exports = sum;