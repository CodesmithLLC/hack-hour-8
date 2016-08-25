// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = i
    while (arr[j + 1] < arr[j]) {
      swap(arr, j + 1, j)
      j -= 1
    }
  }
  return arr
}

function swap (arry, a, b) {
  var temp = arry[b];
  arry[b] = arry[a];
  arry[a] = temp;
  return arry;
}

module.exports = insertionSort;
