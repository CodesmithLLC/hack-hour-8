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

/*
working on finding something more efficient:
10:  1
100:  20
1000:  300
10000:  4000
100000:  50000
1000000: 600000

100:  20
200:  41
300:  160
400:  180
500:  200
600:  220
700:  240
800:  260
900:  280
*/

function countTwos(num) {
  if (typeof num !== 'number') return false;
  const numArr = [];
  let i;

  for (i = 1; i <= num; i++) {
    numArr.push(i);
  }

  return numArr.join('').match(/[2]/gm).length;
}

module.exports = countTwos;
