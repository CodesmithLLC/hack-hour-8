/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
//move elements from end to front NO NEW VARIABLES
//possibly bubble up through array...but no holder variable?
for (let i = array.length-1; i > 0; i--){
  array[i] = array[i-1]
  //not working because overwriting without saving overwritten element
}
console.log(array);
}



reverseInPlace(['a','b','c','d']);

module.exports = reverseInPlace;
