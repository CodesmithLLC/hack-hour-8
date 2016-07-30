/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	//hack hour solution way. very nice!
	if (b===0) return a;
	return gcb(b, a%b);

	// handle negatives
	// a = Math.abs(a);
	// b = Math.abs(b);

	// handle same integer
	// if(a === b) return a;

	// faster, cleaner O(n)
	// let less = Math.min(a,b);
	// let more = Math.max(a,b);
	// for(let i = less; i > 0; i--){
	// 	if( (less % i === 0) && (more % i === 0) ) return i;
	// }

	// brute force method O(n^2)

	// helper function to get put disivibles of an integer into a sorted array from greatest to smallest
	// function getDivisor(input){
	// 	let divisibles = [];
	// 	for(let i = 1; i < Math.floor(input/2); i++){
	// 		if (input % i === 0 && divisibles.indexOf(i) === -1) divisibles.push(i, input/i);
	// 	}
	// 	return divisibles.sort(function(a,b){
	// 		return a < b;
	// 	});
	// }

	// get all divisibles for each integer
	// let divA = getDivisor(a);
	// let divB = getDivisor(b);

	// loop through one array and check if each element exists in the other
	// for(let j = 0; j < divA.length; j++){
	// 	if( divB.indexOf(divA[j]) > -1) return divA[j];
	// }
}

module.exports = gcd;