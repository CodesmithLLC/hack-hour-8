// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	for (var i = 1; i < array.length; i++) {
		for (var j = 0; j <= i; j++) {
			if (array[i] < array[j]) {
				let current = array[i];
				let compared = array[j];
				array[i] = compared;
				array[j] = current;
			}
		}
	}
}

module.exports = insertionSort;