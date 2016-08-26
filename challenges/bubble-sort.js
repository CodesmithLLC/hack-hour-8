// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  //Approach: loop through arr, if i + 1 > i, swap using temp; increment a counter, while counter > 0
  //continue to run  
  let flag = true, temp; 
  while (flag === true){ 
    counter = 0; 
    for (var i = 0; i < array.length; i++){
      if (array[i+1] < array[i]){
        temp = array[i]; 
        array[i] = array[i + 1]; 
        array[i + 1] = temp; 
        counter++; 
      }
      if (counter === 0 && i === array.length -1) flag = false; 
    }
  }
  return array; 
  }

module.exports = bubbleSort;
