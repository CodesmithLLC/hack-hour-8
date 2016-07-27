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
  const arrLen = array.length;
  for (var i = arrLen - 1; i >= 0; i--) {
    array[arrLen] = array[i];
    array.splice(i, 1);
  }
  return array;
}

module.exports = reverseInPlace;
