/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
 
 
function sorter(arr){arr.sort(function(a,b) {
		return b-a
	})
}

var a = [3,6,9,5,8,4];
function highestProduct(array) {
	
	
	var j = array.sort(function(a,b) {
		return b-a
	})
	var total = 1;
	for(var i = 0; i < 3; i++) {
		total *= j[i]
		console.log(j[i])
	}
	return total
}
highestProduct(a);
//iff(array[i] === math.max(array)


//3 numbers multiplied together
//loop through array, find highest 3 numbers? seems like it would be highest
//find first second and third largest and push to array


module.exports = highestProduct;
