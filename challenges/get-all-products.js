/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */


function getAllProducts(array) {
  var combos = [];
  var reducedCombos = [];
  for(var i = 0; i < array.length; i++){
  	var value = 1;
  	var index = i;
  	for (var j = 0; j < array.length-1; j++) {
  		value = value * array[index];
  		index = index + 1 > array.length-1 ? 0 : index + 1;
  	}
  	combos.push(value);
  }

  for(var k = 0; k < combos.length; k++){
  	if (combos.indexOf(combos[k]) === k) {
  		reducedCombos.push(combos[k]);
  	}
  }

  return reducedCombos;

}


module.exports = getAllProducts;
