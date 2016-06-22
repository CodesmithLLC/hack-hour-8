// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	let newArray = [];
	for (var i = 1; i <= num; i++) {
		newArray.push(i);
        console.log(newArray);
	}
	for (var i = 0; i < num; i++) {
		if (newArray[i] % 3 == 0 && newArray[i] % 5 == 0) {
			newArray[i] = "fizzbuzz";
		} else if (newArray[i] % 5 == 0) {
			newArray[i] = "buzz";
		} else if (newArray[i] % 3 == 0) {
			newArray[i] = "fizz"
		}
	}
	return newArray;
}

module.exports = fizzbuzz;
