// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  const swap = (arr, a, b) => {
    const array = arr;
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }
  let end = array.length - 2;
  let madeSwap;
  let i;

  do {
    madeSwap = false;
    for (i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        madeSwap = true;
      }
    }
  } while (end-- && madeSwap);
  return array;
}

module.exports = bubbleSort;
