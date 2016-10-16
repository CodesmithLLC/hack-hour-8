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
let thing = ['a', 'b', 'c', 'd'];

function reverseInPlace(array) {
  // No 'new objects' created, but still things created..
  if (!array || !array.length) return [];
  let temp;
  let len = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[len];
    array[len] = temp;
    len--;
  }
  return array;

  // Easy solution
  // return array.reverse();
}

module.exports = reverseInPlace;
// console.log(reverseInPlace(thing));
