// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    let j = i;
    while (array[j] > array[j + 1]) {
      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j++;
      i = -1;
    }
  }
}

module.exports = bubbleSort;
