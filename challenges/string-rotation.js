/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */




 /*
APPROACH: first, we check the lengths of s1 & s2, if s2 is shorter than s1, return false
('cause s2 can't be a rotation of s1 if it's shorter than s1); 
second, first we must find the first letter in s1, if we do not, we return false. 
We'll do this by looping through all of s2 looking for s1[0].   
If we find the s1[0] in s2, we then loop through s2 & s1 (we'll use i), 
for the length of s1, if i++ in s2 === i++ in s1 through the length of the string.  

 */
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
    function stringRotation(s1, s2) {
if (s2.length > s1.length) return false; 
for (var i = 0; i < s1.length; i++){
    for (var j = 0; j < s1.length; j++)
    if (s2[j] === s1[i]){
            console.log('match', s2[j] + ' ' + s1[i]);
        while (i < s1.length){
            i++; 
            j++; 
            
            if (j === s1.length){
                j = 0; 
               // console.log('new' + s2[j] + ' ' + s1[i]);
                if (s2[j] !== s1[i]){
                    return false; 
                }
            }
            if (s2[j] !== s1[i]){
                console.log(s2[j] + ' ' + s1[i]);
                return false; 
            }
            console.log('match', s2[j] + ' ' + s1[i]);
            if (i === s1.length - 1){
                return true; 
            }
            
            
            
            
        }
         
        
    }
    return true; 
}

}
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
