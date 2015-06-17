/* Task description */
/*
	Write a function a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `string`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(minN, maxN) {
  var number, minN, maxN, maxDivider, i, result, tmp;
  result = result || [];
  minN = +minN;
  maxN = +maxN;
 
  if(minN < 0 || isNaN(minN) || maxN <0 || isNaN(maxN)){
    throw new Error('');
  }
   if(minN < maxN){
    tmp =minN+maxN;
    maxN = tmp - maxN;
    minN = tmp - maxN;
   }

	function isPrime(number){
    isPrime = true;
    maxDivider = Math.sqrt(number)+1;
    for ( i = 2; i < maxDivider; i+=1) {
       if(!number%i){
        isPrime = false;
       }
     }; 
     return isPrime;
  }

  for ( i = minN; i <= maxN; i+=1) {
    if(isPrime(i)){
      result.push(i);
    }
  };
  
  return result;
}

module.exports = findPrimes;