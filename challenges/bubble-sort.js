'use strict';
// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  let newArr = array.slice(),
    len = newArr.length - 1,
    i,
    check = true,
    temp = null;

  while (check) {
    check = false;
    for (i = 0; i < len; i++) {
      if (newArr[i] > newArr[i + 1]) {
        temp = newArr[i + 1];
        newArr[i + 1] = newArr[i];
        newArr[i] = temp;
        check = true;
      }
    }
  }

  return newArr;

}

// var arr = [5, 3, 9, 7, 1, 0, 2];
// console.log(bubbleSort(arr));
module.exports = bubbleSort;
