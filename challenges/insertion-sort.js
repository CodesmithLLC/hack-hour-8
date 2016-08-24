// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const x = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > x) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j+1] = x;
  }
  return array;
}

module.exports = insertionSort;

console.log(insertionSort([3, 7, 4, 9, 5, 2, 6, 1, 8]));
