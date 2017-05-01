// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
 	var length = array.length;
 	for(var i = 0; i < length; i++){
 		for(var j = 0; j < length - i - 1; j++){
 			if(array[j] > array [j+1]){
 				var temp = array[j];
 				array[j] = array[j+1];
 				array[j+1] = temp;
 			}
 		}
	}
	return array;
}

module.exports = bubbleSort;
