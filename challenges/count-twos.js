// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	if (num <= 1) return 0;
	var twoCount = 0;
	for(var i = 0; i <= num; i++){
		var numString = i.toString();
		var index = numString.indexOf('2');
		while(index != -1){
			twoCount++;
			index = numString.indexOf('2', index+1);
		}
	}
	return twoCount;
}

module.exports = countTwos;