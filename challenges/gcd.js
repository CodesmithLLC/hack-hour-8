/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 * (20, 25) -> 5
 */

 // 1) brute force: find every divisor of each value, store into array,
 // then find the greatest shared divisor of the two from each array.
 // 2)

function gcd(a, b) {
  if(a === 0 || b ===0) return 0;
  var aDivisorsArr = primeDiv(a);  // will later be set to the return of helper function
  var bDivisorsArr = primeDiv(b);

  //create helper function to deconstruct a number into its prime divisors,
  // returns array ; recursion?
  function primeDiv(value){
    var divisors = [];
    if(value % 2 === 0){
      divisors.push(2);
      primeDiv(value / 2);
    }
    if(value % 3 === 0){
      divisors.push(3);
      primeDiv(value % 3);
    }
    return divisors;
  }

// iterate through arrays and find greatest same value

}
console.log(gcd(6));

module.exports = gcd;
