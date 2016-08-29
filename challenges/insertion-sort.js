// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

//REDO

function insertionSort(array) {
	var temp;
	//keeps track of overall number - array[i]
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < i; j++) {
				temp = array[i];
			//if its less than the pointer, then move into correct pos
			if(temp < array[j] && temp > array[j-1]) {
				k = j;
				while(k===j) {
					array[k] = array[k-1]; 
					k--;
				}
				array[j] = temp;
			} 
			//else keep if greater than all, 
			// else if (array[j] > array[i]) break;
		}
	}
	return array;
}

module.exports = insertionSort;