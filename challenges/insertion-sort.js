// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
	if (array.length === 1) return array;
	for(var i = 1; i < array.length; i++){
		var temp = array[i];
		for(var j = i-1; j>=0 && array[j] > temp; --j){
			array[j+1] = array[j];
		}
		array[j+1] = temp;
	}
	return array;
}

module.exports = insertionSort;