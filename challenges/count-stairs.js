/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

 function countStairs(n) {
 	var ans = 0;
 	var totalStairs = n;

 	if (n === 0) return 0;
 	if (n === 1) return 1;

 	let steps = [];
 	while (n > 0) {
 		steps.push(1);
 		n--;
 		ans++;
 	};


 	var total = 0;
 	var sliced = false;
 	for (var i = 0; i < steps.length; i++) {
 		steps[i] === 2;
 		for (var j = 0; j < steps.length; j++) {

 			if (total + steps[j] <= totalStairs) {
 				total += steps[i];

 				if (sliced) {
 					ans++;
 				}
 			} else {
 				steps.splice(0, j);
 				sliced = true;
 				ans++;
 				total = 0;
 				break;
 			}
  }

 	}

 	return ans;
 }

module.exports = countStairs;
