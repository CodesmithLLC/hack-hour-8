// Write a function that returns an array containing 
//the numbers 1 to NUM. Put "fizz" in place of numbers 
//divisble by 3, "buzz" in place of numbers divisble by 5, 
//and "fizzbuzz" in place of numbers divisble by both 3 
//and 5

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
//goal is to replace words, so loop through input and use conditional if statements and 
//push to a new array

//first check edge case if input is number and array and not empty, if so, the return exception
	if (isNaN(num)) {
		return 'not a number';
	} 


	let newArr = [];

	for (let i = 0; i < num; i++){
//first if statements checks if num is divisible by both 3 and 5 using modulo
//for fizzbuzz, since it's the least granular word to check for, then push to new array
//next check using modulo for either fizz or buzz, etc
//then check for the other, etc

		if (i % 5 === 0 && i % 3 === 0){
			newArr.push ('fizzbuzz');
		} else if (i % 3 === 0){
			newArr.push ('fizz');
		} else if (i % 5 === 0){
			newArr.push ('buzz');
		} else {
			newArr.push (i);
		}

	}
//return new array
	return newArr;
}

module.exports = fizzbuzz;
