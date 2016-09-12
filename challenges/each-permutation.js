/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array. Permutations must not repeat any of the array elements.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

// function eachPermutation(arr, callback) {
//   for(var i = 0; i < arr.length; i++){
  	
//   }

// }

function eachPermutation(arraysToCombine) {
    var divisors = [];
    for (var i = arraysToCombine.length - 1; i >= 0; i--) {
       divisors[i] = divisors[i + 1] ? divisors[i + 1] * arraysToCombine[i + 1].length : 1;
    }

    function getPermutation(n, arraysToCombine) {
       var result = [], 
           curArray;    
       for (var i = 0; i < arraysToCombine.length; i++) {
          curArray = arraysToCombine[i];
          result.push(curArray[Math.floor(n / divisors[i]) % curArray.length]);
       }    
       return result;
    }

    var numPerms = arraysToCombine[0].length;
    for(var i = 1; i < arraysToCombine.length; i++) {
        numPerms *= arraysToCombine[i].length;
    }

    var combinations = [];
    for(var i = 0; i < numPerms; i++) {
        combinations.push(getPermutation(i, arraysToCombine));
    }
    return combinations;
}

console.log(eachPermutation([1, 2, 3]));

module.exports = eachPermutation;
