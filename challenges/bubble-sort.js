// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let n = 0,
			prev,
			curr;

	while (n < array.length) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] > array[i+1]) {
				prev = array[i];
				curr = array[i+1];
				array[i] = curr;
				array[i+1] = prev;
			}
		}
		n++;
	}
	
	return array;
}

module.exports = bubbleSort;
