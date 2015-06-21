function numberToDigitNames(number){
  var digitNames, 
      numberWithDigitNames,
      i,
      numberString,
      len;

      numberString = number.toString();
      len = numberString.length;
      digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      numberWithDigitNames = [];
      for(i=0; i<len; i+=1){
        numberWithDigitNames.push(digitNames[numberString[i]]);
      }
      return numberWithDigitNames.join('-');

}

var number = 1235434534;
console.log(numberToDigitNames(number));
