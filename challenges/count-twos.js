// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
//we can create a counter going up to the number, then stringify it each time, remove any 2s in that number
//check the length of the newstr against origStr, increment counter by difference in lengths
    let str = num.toString(), res = 0, diff = 0; 
    
    if (num > -1 && num < 2) return 0; 
    if (num > -1 && num < 12) return 1; 
    newStr = str.replace(/2/g, ''); 
    
    
    for (var i = 0; i <= num; i++){
    newStr = i.toString().replace(/2/g, '')
//  console.log('str', i, 'newStr', newStr); 
    diff = i.toString().length - newStr.length; 
    
    res += diff;
    //console.log('diff', diff, 'res', res)
    }
    return res; 
}
module.exports = countTwos;