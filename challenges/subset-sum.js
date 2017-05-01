/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
/* So we need to recurse and use a for loop, which was giving me fits, though I know that's the elegant solution.
I played around here, first using reduce on the whole array, the first half and the second half, slicing and looping through each to get smaller and smaller combinations of numbers.  Underneath that I commented out a nested for loop first running forwards, then backwards through the array.  
*/
    if (isNaN(target)) throw Error('enter only numbers!');
    for (var a = 0; a < array.length; a++){
        if (array[a] === target) return true; 
    }
    
    var res = 0, res2 = 0, sum = 0, sum2 = 0, sum3 = 0; 
    
    for (var m = 0; m < array.length; m++){
     sum = array.slice(m, array.length-m).reduce(function(all, item){
        return all += item; 
     },0);
     sum2 = array.slice(m+1).reduce(function(all, item){
        return all += item; 
     }, 0);
     sum3 = array.slice(0, array.length-(m+1)).reduce(function(all,item){
        return all += item; 
     },0)
     //console.log('sum: ', sum, 'sum2', sum2, 'sum3: ', sum3)
     if (sum === target || sum2 === target){
        return true; 
     }
    }
    let firstHalf = array.slice(0, (array.length/2)); 
    let secondHalf = array.slice(array.length/2)
    //console.log(firstHalf, secondHalf); 
   for (var n = 0; n < firstHalf.length; n++){
     sum = firstHalf.slice(n, array.length-n).reduce(function(all, item){
        return all += item; 
     },0);
     sum2 = firstHalf.slice(n+1).reduce(function(all, item){
        return all += item; 
     }, 0);
     sum3 = firstHalf.slice(0, (array.length-n)).reduce(function(all,item){
        return all += item; 
     },0)
     //console.log('sum FH: ', sum, 'sum2 FH: ', sum2, 'sum3 FH: ', sum3)
     if (sum === target || sum2 === target || sum3 === target){
        return true; 
     }
    } 
    for (var o = 0; o < secondHalf.length; o++){
     sum = secondHalf.slice(o, array.length-o).reduce(function(all, item){
        return all += item; 
     },0);
     sum2 = secondHalf.slice(o+1).reduce(function(all, item){
        return all += item; 
     }, 0);
     sum3 = secondHalf.slice(0, array.length-o).reduce(function(all,item){
        return all += item; 
     },0);
    // console.log('sum SH: ', sum, 'sum2 SH', sum2, 'sum3 SH: ', sum3)
     if (sum === target || sum2 === target || sum3 === target){
        return true; 
     }
    }
    
    for (var i = 0; i < array.length; i++){
        res = array[i];
        for (var j = 0; j < array.length; j++){
            if (j !== i){
                res += array[j]; 
                res2 = array[i] + array[j]; 
                //console.log('res', res, 'res2', res2); 
                if (res === target || res2 === target){
                    return true; 
                }
                
            }
        }
    }
    for (var k = array.length-1; k >=0; k--){
        res = array[k] ;
        for (var l = array.length-1; l >=0; l--){
            if (k !== l){
            //  console.log('backadd', res, array[l])
                res += array[l];    
              // res2 = array[k] + array[l] 
              // console.log('backres', res, l, k); 
                    if (res === target){
                return true; 
                }
            }
        }


    }
    
   
    
    
    
    


    return false; 
    
    }





module.exports = subsetSum;
