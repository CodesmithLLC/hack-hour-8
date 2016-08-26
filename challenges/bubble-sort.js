// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	var temp;
	var unsorted = true;
	while(unsorted) {
		unsorted = false;
		for (var i = 0; i < array.length-1; i++) {
			if(array[i] > array[i+1]) {
				temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				unsorted = true;
			}
		}
	}
	return array;
}

module.exports = bubbleSort;
