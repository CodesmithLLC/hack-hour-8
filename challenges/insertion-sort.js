// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


const insertSort = array => {
	let x = 1;
	let y;
	while (x < array.length) {
		y = x - 1;
		while (array[x] < array[y]) {
			let temp = array[x]
			array[x] = array[y]
			array[y] = temp;
			x--;
			y--;
	}
	x++;
	}
	return array;
}

module.exports = insertionSort;