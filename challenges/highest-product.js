/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sorted = array.sort(function (a,b) {
    return (Math.abs(b) - Math.abs(a));
  });
  if (sorted[0]*sorted[1]*sorted[2] > 0) return sorted[0]*sorted[1]*sorted[2];
  else {
  	let negs = [];
  	let pos = [];
  	for (var i = 0; i < 3; i++) {
  		if (sorted[i] < 0) negs.push(sorted[i]);
  		else pos.push(sorted[i]);
  	}
  	negs = negs.sort(function(a,b) {
  		return (Math.abs(a) - Math.abs(b));
  	});
  	let holder = negs.shift();
  	for (var x = 3; x < sorted.length; x++) {
  		console.log("sorted" +sorted[i])
  		if (sorted[i] > 0) pos.push(sorted[i]);
  		break;
  	}
  	negs = negs.concat(pos);
  	return negs[0] * negs[1] * negs[2];
  }
}


module.exports = highestProduct;
