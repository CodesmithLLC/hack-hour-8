// Write a function "countTwos" that takes a number as an argument, n.
//The function will return the number of 2s encountered when counting from 1 to
//n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  var twoCounter = 0;
  var numberToCheck = 0;

  for(let i = 0; i <= num ; i++){
    numberToCheck = i.toString();
    for(let j = 0 ; j < numberToCheck.length ; j++){
      if(numberToCheck.charAt(j) === '2'){
        twoCounter++;
      }
    }
  }
  return twoCounter;
}

module.exports = countTwos;
// O(n^2) time complexity
// way to reduce complexity: for every 10s, there is one '2', except there are
// 11 2's in the 20s.
// modulo num by 10? then add 10 to account for 20's; then
// repeat for remainder until num is < 10.
/*
function countTwos(num) {
  var twoCounter = 0;
    twoCounter += num % 10
    if(num > 19){
      twoCounter += 10
    }
}
*/
console.log(countTwos(108));
