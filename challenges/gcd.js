/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// function gcd(a, b) {

  // var denom = 1;
  // if(a === 0 || b === 0){
    // return denom;
  // }
  // var smallNum = Math.min(a,b);

  // var idx = 1;
  // while(idx <= smallNum){
    // if(a % idx === 0 && b % idx === 0){
      // denom = idx;
    // }
    // idx++;
  // }
  // return denom;
// }


//should be faster than above
function gcd(a, b) {

  if(a === 0 || b === 0){
    return 1;
  }
  var smallNum = Math.min(a,b);

  var idx = smallNum;
  while(idx >= 1){
    if(a % idx === 0 && b % idx === 0){
      return idx;
    }
    idx--;
  }
  // return denom;
}
// console.log(gcd(39, 120));

module.exports = gcd;
