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
  if (!Array.isArray(array)) return 'type error: argument needs to be type Array';
  if (array.length < 1) return array;
  if (!array) return [];

  let j = array.length - 1;
  const len = array.length / 2;

  for (let i = 0; i < len; i++) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    j--;
  }

  return array;
}

module.exports = reverseInPlace;
