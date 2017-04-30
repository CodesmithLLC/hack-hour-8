/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
//Approach1: first, I thought of trying to put all items in arr into an object as
//keys, then simply checking if key is in obj since ES6 coerces 
//non-object arguments into objects when using Object.keys, though this hasn'this
//led where I wanted it to, since the returned item is an array with elements
//starting from zero, incrementing by 1 for each item in array.  

//Approach2: Recursively slice the array in half until you're down to an array length of 1 (a la merge sort), if that 1-item array contains target, return true.  Trouble executing that 

//Approach3: Brute force :(
var slice1 = arr.slice(0, Math.floor(arr.length/2)); 
var slice2 = arr.slice(Math.floor(arr.length/2)); 
for (var i = 0; i < arr.length; i++){
    if ((slice1[i] === target) || (slice1[slice1.length-(i + 1)] === target) || (slice2[i] === target) || (slice2[slice2.length - (i + 1)] === target)){
        return true; 
    }
}
return false; 
}


module.exports = findInOrderedSet;
