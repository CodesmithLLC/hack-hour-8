/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  var output = [];
  var reducedArray = [];

  var sortedArray = array.sort(function (a, b) {
  	if (a[0] === b[0]) {
  		return 0;
  	}
  	else {
  		return (a[0] < b[0]) ? -1 : 1;
  	}
  });

  sortedArray.reduce(function(a,b,i){
  	if(i === sortedArray.length-1) {
  		return reducedArray.push(a.concat(b));
  	}
  	else if(a[a.length-1] >= b[0]){
  		return a.concat(b);
  	} else {
  		reducedArray.push(a);
  		return [].concat(b);
  	}
  });

  reducedArray.forEach(function(value){
  	var temp = [];
  	temp.push(value[0]);
  	temp.push(value[value.length-1]);
  	output.push(temp);
  });

  return output;

}


module.exports = mergeRanges;
