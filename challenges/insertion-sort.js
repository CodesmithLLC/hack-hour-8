// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	let value;
	let checkVal;
	for (var i = 1; i < array.length; i++) {
		for (var j = 0; j <= i; j++) {
			if (array[i] < array[j]) {
				value = array[i];
				checkVal = array[j];
				array[j] = value;
				array[i] = checkVal;
			}
		}
	}
	return array;
}

module.exports = insertionSort;
