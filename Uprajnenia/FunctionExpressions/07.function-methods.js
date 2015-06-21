function toArray(obj){
  var arr, 
      prop;

  if(obj.length){
    arr = Array.prototype.slice.apply(obj);
  } else{
    arr = [];
    for (prop in obj){
      if(typeof(obj[prop]) !== 'function'){
        arr.push({
          prop: prop,
          value: obj[prop]
        });
      }
    }
  } 
  return arr;    
}

function passArguments(){
  console.log(toArray(arguments));
}

var obj = {
  firstName: 'Doncho',
  lastName: 'Minkov',
  specialities: ['JavaScript', 'Web', 'Android', 'iOS', 'Window Phone']
};

console.log('ArgumentCollection: ');
passArguments(1, 2, 3, 4, 5, 6, 7);
console.log('Object: ');
console.log(toArray(obj));
console.log(obj.specialities);