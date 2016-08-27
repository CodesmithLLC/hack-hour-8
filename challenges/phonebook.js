/**
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and 
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?
*/

function findName(jazbook, name) {
  for (let key in jazbook) {
  	if (jazbook[key] === name) {
  		return number;
  	}
  }

  return false;
}

function makeJazBookIntoARealPhoneBookObject(jazbook){
	let phonebook = {};

	// sort array - O(n log n)
	jazbook.sort(function(a,b) {
		return a[0] - b[0];
	});

	// For loop attempt
	// for (let i = 0; i < jazbook.length; i++) {
	// 	phonebook[jazzbook[i][0]] = jazbook[i][1];
	// }

	// For-in loop
	for (let key in jazbook) {
		phonebook[key[0]] = jazbook[key[1]];
	}

  return phonebook;
}


var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;