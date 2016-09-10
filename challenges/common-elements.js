// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = [45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){

	function removeDupes(array){
		let newObj = {}
		return newArray = array.filter((el) => {
			if(!newObj.hasOwnProperty(el)){
				newObj[el] = true;
				return el;
			}
			else return;
		})
	}

	function filterCommons(array){
		let filter = array.map((el) => {
			return {count: 1, el: el}
		}).reduce((obj, index) => {
			obj[index.el] = (obj[index.el] || 0) + index.count;
			return obj;
		}, {});
		return Object.keys(filter).filter((el) => filter[el] === 4);
	}

	let fArray1 = removeDupes(array1);
	let fArray2 = removeDupes(array2);
	let fArray3 = removeDupes(array3);
	let fArray4 = removeDupes(array4);

	let masterArray = filterCommons(fArray1.concat(fArray2,fArray4,fArray4));
	return masterArray.length > 0 ? masterArray : "Nothing in Common!";
}

module.exports = commonElements;
