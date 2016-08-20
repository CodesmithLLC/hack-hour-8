// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

/*
Edge case: array length === 1 returns array
Slice array beginning at 0 to 2 and run a decrementing loop that compares the last value in the sliced array to the preceding values in the sliced array. Insert where the value is greater than the evaluated item in the array. Increment slice array by 1 and repeat until slice iterations reaches array length and return array.
*/

function comparisonSlicer(array){
	for(var j = 0; j <= array.length-1; j++) {
    if(array[array.length-1] < array[j]) {
      var output = array.slice(0,array.length-1);
      output.splice(j,0,array[array.length-1]);
      return output;
    }
  }
	return array;
}

function insertionSort(array) {
  if(array.length === 1){ 
  	return array; 
  }

  var output = array.slice(0,1);

  for(var i = 1; i <= array.length-1; i++) {
  	output = output.concat(array[i]);
  	output = comparisonSlicer(output);
  }

  return output;

}


module.exports = insertionSort;