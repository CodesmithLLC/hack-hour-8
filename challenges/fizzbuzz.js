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
	// store results in an array
	let fizzBuzzArray = [];


	// loop the numbers up until the given input number WHILE checking for divisible numbers
	// each number should be pushed into an array
	for (var i = 1; i <= num; i++) {

		// check if number is divisible by both 3 and 5, return 'fizzbuzz' when true
		if (i % 3 === 0 && i % 5 === 0) {
			fizzBuzzArray.push('fizzbuzz');
		}

		// check if number is divisible by 3, return 'fizz' when true
		else if (i % 3 === 0) {
			fizzBuzzArray.push('fizz');
		}

		// check if number is divisible by 5, return 'buzz' when true
		else if (i % 5 === 0) {
			fizzBuzzArray.push('buzz');
		}

		// otherwise just push number to the fizzBuzzArray
		else {
			fizzBuzzArray.push(i);
		}
	}

	return fizzBuzzArray;
}

module.exports = fizzbuzz;
