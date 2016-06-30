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

/*

1. create new arr [] and var counter starting at 1.
2. creat for loop that goes from 0 to num parameter and increments counter each time.
3. inside the for loop evaluate number and if else counter value:
	3a. Divisible by 3 and 5 push string push 'fizzbuzz'
	3b. Divisble by 3 push string 'fizz'
	3c. Divisible by 5 push string 'buzz'
	3d. Else
4. Outside for loop return new arr

*/

function fizzbuzz(num) {
	var container = [];
	var counter = 1;
	for (var i = 0; i < num; i++ ) {
		if ( counter % 3 === 0 && counter % 5 === 0) {
			container.push('fizzbuzz');
			counter++;
		} else if ( counter % 3 === 0 ) {
			container.push('fizz');
			counter++;
		} else if ( counter % 5 === 0 ) {
			container.push('buzz');
			counter++;
		} else {
			container.push(counter);
			counter++;
		}
	}
	return container;
}


module.exports = fizzbuzz;
