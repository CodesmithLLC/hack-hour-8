// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	let length = array.length

	for(var i = 0; i < length; i++) {
		var temp = array[i]
		for(var j = i-1; j >= 0 && array[j] > temp; j--) {
			array[j+1] = array[j]
		}
		array[j+1] = temp
	}
	return array
}

module.exports = insertionSort;