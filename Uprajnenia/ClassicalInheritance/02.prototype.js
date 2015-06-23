String.prototype.repeat = function (count){
  var str,
      pattern,
      i;
  pattern = String(this);
  if(!count){
    return patern;
  }
  str = '';
  for ( i = 0; i < count; i+=1) {
    str += pattern;
  };
  return str;
};

console.log('-'.repeat(83));