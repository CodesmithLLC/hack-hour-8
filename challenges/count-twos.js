// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {

  var twoCount = 0,
    idx = 0,
    str,
    i;

  while(idx <= num){
    str = idx.toString();
    for(i = 0; i < str.length; i++){
      if(str[i] === '2'){
        twoCount++;
      }
    }

    idx++;
  }
  return twoCount;
}

module.exports = countTwos;
