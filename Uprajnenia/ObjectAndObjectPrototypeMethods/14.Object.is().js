(function () {
  console.log(Object.is('foo', 'foo'));
  console.log(Object.is(this.window, this.window));   // true

  console.log(Object.is('foo', 'bar'));
  console.log(Object.is([], []));

  var test = {a: 1};
  console.log(Object.is(test, test));

//Special cases
  console.log(Object.is(0, -0));
  console.log(Object.is(-0, -0));
  console.log(Object.is(NaN, 0/0));

}());