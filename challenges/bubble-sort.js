// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  for(var i = 0; i < array.length; i++){
    for(var j = array.length-1; j > 0; j--){
  	  if(array[array.length-j] < array[array.length-j-1]){
  	  	var temp1 = array[array.length-j];
  	  	var temp2 = array[array.length-j-1];
  	  	array.splice(array.length-j-1,2,temp1,temp2);
  	  } 
  	}
  }
  return array;
}

module.exports = bubbleSort;
