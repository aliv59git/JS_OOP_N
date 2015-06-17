/* Task description */
/*
	Write a function a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `string`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(minN, maxN) {
  var minN = +minN, 
      maxN = +maxN,
      divisor,
      maxDivisor,
      i,
      isPrime,
      result = []; 

      if(minN < 0 || isNaN(minN) || maxN < 0 || isNaN(maxN)){
        throw new Error('');
      }
      if(typeof(minN)=== undefined || typeof(maxN) === undefined){
        throw new Error('');
      }

      for (i = +minN; i <= +maxN; i+=1) {
        isPrime = true;
        maxDivisor = Math.sqrt(i);

        for (divisor = 2; divisor <= maxDivisor; divisor+=1) {
          if(!(i%divisor)){
            isPrime = false;
            break;
          }
        };
        if(isPrime && i > 1){
          result.push(i);
        }
      };
  
  return result;
}

module.exports = findPrimes;



