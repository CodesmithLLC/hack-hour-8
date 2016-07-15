/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

/*
Approach:
If array length is < 3 return err
Use Math.max
Run slice 3 times taking largest integer each time
Multiply the 3 integers identified
*/

function highestProduct(array) {
  if (array.length < 3) return "Array must have at least 3 values!";
  var container = [];

  function product(arr) {
  	return arr.reduce(function(previous, current){
  		return current * previous;
  	}, 1);
  }

  for(var i = 0; i < 3; i++) {
  	var position = array.indexOf(Math.max.apply(null, array));
  	container.push(array.splice(position,1)[0]);
  }

  var value = product(container);
  return value;
}
console.log(highestProduct([1,2,-1,-3]));

module.exports = highestProduct;
