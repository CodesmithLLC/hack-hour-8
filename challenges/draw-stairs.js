/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    let space = '', star = '*', line; 
    for (i = n-1; i > 0; i--){
        console.log(new Array(i).join(' ') + addStars(n));    
}
    
function addStars(n){
  for (var i = 0; i < n; i++){
    return space += star;   
  }
}
}


module.exports = drawStairs;
