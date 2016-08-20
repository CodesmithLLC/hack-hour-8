// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// so slow!

function insertionSort(array) {
  const swap = (arr, a, b) => {
    const swapArr = arr;
    const temp = swapArr[a];
    swapArr[a] = swapArr[b];
    swapArr[b] = temp;
  };
  let i;
  let j;

  for (i = 0; i < array.length; i++) {
    j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, --j);
    }
  }

  return array;
}

module.exports = insertionSort;
