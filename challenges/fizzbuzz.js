// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, 
//"buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
	// need new array to push to
	//number % 3 === 0 = fizz
	//number % 5 === 0 = buzz
	//number % 5 && 3 === 0 = fizz buzz
		//^ needs to be first to test both cases, if not test if either works
	//return new array
	var results = [];
	for(var i = 1; i < num; i++) {
		if(i % 5 === 0 && i % 3 === 0) {
			results.push("fizzbuzz")
		} else if(i % 3 === 0) {
			result.push("fizz")
		} else if (i % 5 === 0) {
			results.push("buzz")
		} else {
			results.push(i);
		}
	}
	return results;
}

module.exports = fizzbuzz;
