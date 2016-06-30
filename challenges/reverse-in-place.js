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

/*
I'm sure we aren't supposed to use the built-in method... return array.reverse();
*/

function reverseInPlace(array) {
  const arr = array;
  const len = array.length - 1;
  let i = 0;
  let temp;

  if (!Array.isArray(array)) {
    return null;
  }

  if (arr === []) {
    return arr;
  }

  for (i; i < len; i++) {
    if (arr[i] === arr[len - i]) {
      return arr;
    }
    if (i > len - i) {
      return arr;
    }
    temp = arr[i];
    arr[i] = arr[len - i];
    arr[len - i] = temp;
  }

  return arr;
}

module.exports = reverseInPlace;
