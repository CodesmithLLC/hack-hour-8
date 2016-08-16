// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  for (var i = 0; i < num; i++) {
    if (num < 100) {
      var startVal = 0;
    } else if (num < 1000) {
      var startVal = 20;
    } else if (num < 10000) {
      var startVal = 1000;
    }
    var mult = num.toString().split('')[0];
    var count = startVal * parseInt(mult);
    num = num.shift();
    return count + countTwos(num);
  }
}

module.exports = countTwos;
