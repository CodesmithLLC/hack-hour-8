/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  var combos = [];

  permutation(array, []);

  function permutation(begArr,arr) {
  	  if (begArr.length === 0) combos.push(arr.join(',').split(','));
  	  for (var i = 0, l = begArr.length; i < l; i++) {
  	    let s = begArr.splice(i,1);
  	    arr.push(s);
  	    permutation(begArr,arr);
  	    arr.pop();
  	    begArr.splice(i,0,s);
  	  }
  	}

  	var finalArr = combos.map(function(arrToNum){
  	   return arrToNum.map(function(e){
  	  	return parseInt(e);
  	   });
  	  });

  	var product = 0;
  	for (var i = 0; i < finalArr.length; i++) {
  		var current = finalArr[i][0]*finalArr[i][1]*finalArr[i][2];
  		if (current > product) {
  			product = current
  		}
  	}
  	return product;
}


module.exports = highestProduct;
