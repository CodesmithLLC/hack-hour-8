/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

function isSubstring(s1, s2) {
    return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
    /* Answer with multiple calls
     *
     * for(var i = 0; i < s1.length;i++){
     *   if(!isSubstring(s1[i], s2[i])){
     *     return false;
     *   }
     * }
     * return true; */

    /* 
     *   for(var i = 0; i < s1.length; i++){
     *     if(!s2.includes(s1[i])){
     *       return false;
     *     }
     *   }
     *   return true; */


    //this seems to work with a single call to isSubstring
    var string2 = '';
    var string1 = '';
    var idx = 0;

    for (var i = 0; i < s2.length; i++) {

        if (s1[idx] !== s2[i]) {
            string2 = string2 + s2[i];
        }
        if (s1[idx] === s2[i]) {
            string1 = string1 + s2[i];
            idx++;
        }

    }

    return isSubstring((string1 + string2), s1);

}

module.exports = {
    isSubstring: isSubstring,
    stringRotation: stringRotation
};
