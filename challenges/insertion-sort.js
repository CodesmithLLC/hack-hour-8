// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

var test = [3,7,4,9,5,2,6,1];

function insertionSort(array) {
  var copyArr = array.slice(),
    temp;
  
  copyArr.forEach(function(ele,idx){
    for(var j = copyArr.indexOf(ele); j >= 0; j--){
      if(ele > copyArr[j] && ele < copyArr[j + 1]){
        temp = copyArr.splice(idx, 1);
        copyArr.splice(j + 1, 0, temp[0])
        // console.log(copyArr);
        // console.log(copyArr);
      }
      if(ele < copyArr[j] && copyArr[j - 1] === undefined){
        temp = copyArr.splice(idx, 1);
        copyArr.splice(0, 0, temp[0])
      }
    }
  })

  return copyArr;
}

module.exports = insertionSort;
