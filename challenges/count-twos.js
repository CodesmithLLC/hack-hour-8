// Write a function "countTwos" that takes a number as an argument, n. The
// function will return the number of 2s encountered when counting from 1 to n
// (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483
/*
could create an array of all the numbers,
then for each,
array[i].toString, match(/[2]/gm)
*/

function countTwos(num) {
  const numArr = [];
  let i;

  for (i = 1; i <= num; i++) {
    numArr.push(i);
  }

  return numArr.join('').match(/[2]/gm).length;
}

module.exports = countTwos;
