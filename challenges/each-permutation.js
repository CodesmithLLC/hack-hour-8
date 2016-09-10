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

const eachPermutation = (arr, callback) => {
  const permArr = [];
  const usedChars = [];
  let i;
  let j;
  let tempArr;
  const res = [];
  const miniRes = [];

  const permute = (input) => {
    let i;
    let ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  };

  const pArr = permute(arr);

  for (i = 0; i < pArr.length; i++) {
    tempArr = pArr[i];
    for (j = 0; j < tempArr.length; j++) {
      miniRes.push(callback(tempArr[j]));
    }
    res.push(miniRes);
  }

  return res;
};

eachPermutation(testArr, xSq);


module.exports = eachPermutation;
