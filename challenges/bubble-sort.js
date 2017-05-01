// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  let answer = array;
  let sorted = false;

  function sorter(arr) {
    for (let i = 0; i < arr.length-1; i++) {
      let holder;
      if (arr[i+1] < arr[i]) {
        sorted = false;
        holder = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = holder;
      }
    }
    answer = arr;
  }

      while (sorted === false) {
        sorted = true;
        sorter(answer);
      }
      return answer;
}

module.exports = bubbleSort;
