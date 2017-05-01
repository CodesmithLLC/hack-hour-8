// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  //APPROACH: check if array[i] is less than arr[i-1], if so, swap using a temp var, then check if 
  //array[i] is less than element before that by decrementing i and checking again. 
  var temp; 
  for (var i = 0; i < array.length; i++){
    while (array[i] < array[i-1] && array[i-1] !== undefined){
      temp = array[i]; 
      array[i] = array[i-1];
      array[i-1] = temp; 
      //console.log(array);
      i--; 
    }
 }
 return array; 
}

module.exports = insertionSort;