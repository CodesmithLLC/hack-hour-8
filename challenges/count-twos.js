// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let twos = 0;

  for (let i = 1; i <= num; i++) {
    let numString = i + "";

    if (numString.indexOf("2") > -1 ) {
      let numArr = numString.split("");

      numArr.filter(function(item) {
        if (item === "2") {
          twos++;
        }
      });
    }
  }

  return twos;
}

//altternative
// function countTwos(target, num) {
//   var count = 0;

//   var regex = new RegExp(target, 'g');

//   for (var i = target; i <= num; i++) {
//     i.toString().replace(regex, function() {
//       count++;
//     })
//   }
//   return count;
// }

module.exports = countTwos;
