/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

/* APPROACH: Swapping items typically requires a temp variable, which we cannot create here.  The i
instructions say we cannt create a new object in memory, but it doesn't say we cannot modify an
existing object.  So I pushed the items in the array on to the end of the array in reverse order,
then returned the 2nd half of the array.  



*/
function reverseInPlace(array){
    for (var i = array.length-2; i >= 0; i--){
        console.log(array); 
        array.push(array[i]); 
    }
    return array.slice(array.length/2); 
    }

module.exports = reverseInPlace;