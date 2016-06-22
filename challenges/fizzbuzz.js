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
	// define empty array to be returned
	var result = [];
	// wrap function that checks divisibility of num and pushes to result array
	function doFizzBuzz(num){
        // check for i = 0
        if (i === 0) result.push(0);
		// define new empty string for every increment
		var str1 = '';
		// check for divisibilty by 3, if so add fizz to string
		if (i % 3 === 0) str1 += 'fizz';
		// check for divisibility by 5, if so add buzz to string
		if (i % 5 === 0) str1 += 'buzz';
		// check that number is divisible by either 3 or 5 by string length, if so push string to result array
		if (str1.length > 0) result.push(str1);
		// if string is empty, push the number
		else result.push(i);
		}
	// if num is positive increment up
	if (num > 0) {
		// loop through numbers 1 to num
		for (var i = 1; i <= num; i++) {
			// execute fizzBuzz on each number from 1 to num
			doFizzBuzz(i);
	    }
    }
	// if num is negative increment down
	else{
		// loop through numbers 1 to num
		for (var i = 1; i >= num; i--) {
			// execute fizzBuzz on each number from 1 to num
			doFizzBuzz(i);
		}
	}
	return result;
}

module.exports = fizzbuzz;
