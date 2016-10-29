/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */


/*
Approach:
If length of the two strings do not match return false,
else return isSubstring of reordered 2nd string.
*/

function isSubstring (s1, s2) {
  return s1.indexOf(s2) >= 0;
}



function stringRotation (s1, s2) {
	if (s1.length !== s2.length) {
		return false;
	}

	var s2Reversed = s2.slice(s2.indexOf(s1[0])) + s2.slice(0,s2.indexOf(s1[0]));

  return isSubstring(s1, s2Reversed);
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
