// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// var test = [3, 7, 4, 9, 5, 2, 6, 1];
// var test2 = [9, 7, 8, 7, 8, 0, 2];

function insertionSort(array) {
  const copyArr = array.slice();
  let temp;

  copyArr.forEach((ele, idx) => {
    for (let j = idx; j >= 0; j--) {
      if (j > 0 && ele < copyArr[j - 1]) {
        temp = copyArr.splice(j, 1);
        copyArr.splice(j - 1, 0, temp[0]);
      }
    }
  });

  return copyArr;
}
// console.log(insertionSort(test))
module.exports = insertionSort;
