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
    for (var i = 0; i < jazbook.length; i++) {
      if (jazbook[i][0] === name) {
        return jazbook[i][1]
      }
    }
  return false;
}

function makeJazBookIntoARealPhoneBookObject(jazbook){
  let phonebook = {};
  let temp = jazbook.sort(function(a, b) {
  	 if (a[0] < b[0]) return -1;
  	 else if (a[0] > b[0]) return 1;
  	 else return 0;
  })
  console.log(temp)
  for (let i of jazbook) {
  	console.log(i)
    phonebook[i[0]] = i[1] 
  }
  return phonebook;
}



var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;
