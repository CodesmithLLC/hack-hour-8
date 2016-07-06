/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

// function isSubstring(s1, s2) {
//   return s1.indexOf(s2) >= 0;
// }

// function stringRotation(s1, s2) {

// }

function rotationChecker(str1, str2) {
	var str1Total = 0;
	var str2Total = 0;
	
	for(var i = 0; i < str1.length; i++) {
		str1Total+=str1.charCodeAt(i)
	}
	for(var x = 0; x< str2.length; x++) {
		str2Total += str2.charCodeAt(x)
	}
	if(str2Total === str1Total) {
		return true;
	} else {
		return false;
	}
}
rotationChecker("hello", "lloh");

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
