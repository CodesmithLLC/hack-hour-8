// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	var curr = 1;
	var total = 0;
	for(var i = 0; i < num; i++) {
		var now = curr += 1 
		var stringed = now.toString()
		for(var j = 0; j < stringed.length; j++) {
			if(stringed.charAt(j) === 2 ||stringed.charAt(j) === '2') {
				total += 1
			}
		}	
	}
	return total
}
 


//increment by 1 every time and check current number for 2'S
//increment total counter variable if there is a 2.
//var currentNumber += 1, check number, increase or leave counter

module.exports = countTwos;