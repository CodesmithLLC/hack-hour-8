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

function eachPermutation(arr, callback) {
  const temp = [];
  const res = [];
  let i = 0;

  temp.push(arr[i++]);
  temp.push(arr[i++]);
  res.push(temp);
  res.push(temp.reverse());

  while (i < arr.length) {
    let next = arr[i++];
    temp = res;

    temp.forEach(el => {
      el.push();
    });
  }

  return res;
}



module.exports = eachPermutation;
