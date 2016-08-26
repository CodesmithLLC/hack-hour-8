// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort






function bubbleSort(array) {
 var temp;
  for (var i = 0; i < array.length; i++) { 
    for (var j = 0; j < (array.length - i - 1); j++) { 
      if(array[j] > array[j+1]) {
        
        temp = array[j];  
        array[j] = array[j+1]; 
        array[j+1] = temp; 
      }
    }        
  }
}
module.exports = bubbleSort;
