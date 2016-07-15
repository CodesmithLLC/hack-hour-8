/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
    /* APPROACH: Check for edge cases, remove non-numbers from array - log snippy comment regarding proper use of this function
    if array does not contain 3 numbers, throw error.  Otherwise, sort array, check product of largest three against smallest to account 
    for negative numbers(-3 * -6 * 1 > 2 * 4 * 1).  
        */

    for (a = 0; a < array.length; a++){
        if (isNaN(array[a])){
            array.splice(a, 1); 
            a = 0; 
            console.log("we'll keep going, but please put only numbers in the array"); 
        }
    }
    if (array.length < 3){
        throw "Please use an array with at least three numbers."; 
    }
    array.sort(function(a,b){return a - b});

    let firstProd = array[array.length-1]*array[array.length-2]*array[array.length-3]; 

    var secondProd = array[0] * array[1] * array[array.length-1];


if (firstProd >= secondProd) return firstProd; 
return secondProd; 
}


module.exports = highestProduct;
