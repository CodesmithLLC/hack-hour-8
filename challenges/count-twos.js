// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

//brute force: count from 1 to n
//every number, stringify number and check how many 2s it has
//add number of 2s it has to overall count
function countTwos(num) {
	var count=0;
	var numString;
	for(var i=0; i<=num; i++){
		numString = i.toString();

		for(var j =0; j<numString.length ; j++){
			if(numString[j] == 2) count++;
		}
	}
	return count;
}

module.exports = countTwos;