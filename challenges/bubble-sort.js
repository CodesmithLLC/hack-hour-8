// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

	while (true) {
		let counter = 0;

		for (let i = 1; i < array.length; i++) {


			let first = array[i - 1];
			let second = array[i];

			if (second < first) {
				array[i - 1] = second;
				array[i] = first;
				counter++;
			}
		}
		
		if (counter === 0)  return array;
	}

}

module.exports = bubbleSort;
