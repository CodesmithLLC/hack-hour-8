// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  	var startVal, detractor, twoCase;
  	if (num < 100) {
  		var count = 0;
  		for (var i = 0; i < num; i++) {
  			if (i.toString().split('')[0] === '2' || i.toString().split('')[1] === '2') count++;
  			else if (i.toString().split('')[0] === '2' && i.toString().split('')[1] === '2') count = count+2;
  		}
  		return count;
	} else if (num < 1000) {
	  startVal = 20;
	  detractor = 100;
	  twoCase = 100;
	} else if (num < 10000) {
	  startVal = 300;
	  detractor = 1000;
	  twoCase = 1000;
	} else if (num < 100000) {
		startVal = 4000;
		detractor = 10000;
		twoCase = 10000;
	}
    var mult = num.toString().split('')[0];
    if (mult > 1) var count = startVal * parseInt(mult) + twoCase;
    else count = startVal * parseInt(mult);
    num = num - (detractor * parseInt(mult));
    return count + countTwos(num);
}

module.exports = countTwos;
