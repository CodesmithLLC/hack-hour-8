// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  var val1;
  var val2;
  var loops = 0;
  while (loops <= array.length) {
    for (var i = 1; i < array.length; i++) {
      if (array[i] < array[i-1]) {
        val1 = array[i];
        val2 = array[i-1];
        array[i-1] = val1;
        array[i] = val2;
      }
    }
    loops++
  }
  return array;
}

module.exports = bubbleSort;
