/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let counter = 0, total = 0, mode; 

    //First, we get the sum of the numbers in the array using reduce
    
  let sum = array.reduce(function(all, item){
    all += item; 
    return all; 
  }, 0); 
    
    // We get the mean by dividing the sum by the number of items in the array
    
  let mean = Math.floor(sum / array.length); 
    //console.log('sum', sum, 'mean', mean); 

    //We get the mode by running 2 loops through the array and increasing a counter when 
    // a match is found.  If multiple matches exist, var total keeps track of which item 
    // in the array has the most matches and var mode is set to that item in the array. 
  for (var i = 0; i < array.length; i++){
    for (var k = 0; k < array.length; k++)
      if (array[k] === array[i] && i !== k){
        counter++; 
        if (counter > total){
            total = counter; 
            mode = array[i]; 
              //console.log('counter', counter + ', mode:' + mode); 
           }
       }
       }
  if (mean === mode){
    return true; 
    }
  return false; 
}


module.exports = modemean;
