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
2. create for loop that goes from 1 to num parameter and increments counter each time.
3. inside the for loop evaluate number and if else counter value:
	3a. Divisible by 3 and 5 push string push 'fizzbuzz'
	3b. Divisble by 3 push string 'fizz'
	3c. Divisible by 5 push string 'buzz'
	3d. Else
4. Outside for loop return new arr

*/

// For loop version

// function fizzbuzz(num) {
//   var container = [];
//   for (var counter = 1; counter <= num; counter++ ) {
//     if ( counter % 3 === 0 && counter % 5 === 0) {
// 	  container.push('fizzbuzz');
//     } else if ( counter % 3 === 0 ) {
// 	  container.push('fizz');
//     } else if ( counter % 5 === 0 ) {
//       container.push('buzz');
//     } else {
//       container.push(counter);
//     }
//   }
//   return container;
// }

// Recursive version

function fizzbuzz(num) {
  var container = [];
  
  function fizzbuzzPush(number, arr) {
  	if (number === 0) {
  	  
  	  // Base Case: Returns array
  	  return arr;

  	} else if (number % 3 === 0 && number % 5 === 0) {
  	  
  	  arr.unshift('fizzbuzz');
  	  return fizzbuzzPush(number - 1, arr);

  	} else if (number % 3 === 0) {

  	  arr.unshift('fizz');
  	  return fizzbuzzPush(number - 1, arr);

  	} else if (number % 5 === 0) {

  	  arr.unshift('buzz');
  	  return fizzbuzzPush(number - 1, arr);

  	} else {

  	  arr.unshift(number);
  	  return fizzbuzzPush(number - 1, arr);

  	}

  }

  return fizzbuzzPush(num, container);

}

module.exports = fizzbuzz;
