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
  let result = '';
  let spaces = n - 1;
  let stars = 1;

  for (let i = 0; i < n - 1; i++) {
    
    result += create(spaces, ' ') + create(stars, '*') + '\n';
    spaces--;
    stars++;

  }

  result += create(space, ' ') + create(stars, '*');
  return result;

  function create(num, char) {
    let result = '';

    for (let i = 0; i < num; i++) {
      result += char;
    }

    return result;
  }
}


module.exports = drawStairs;
