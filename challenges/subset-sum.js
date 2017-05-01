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
/*idea 1) if target is Odd, then there should be one more odd
array element than even elements, else false; if target is even, then
there should be only even elements, or even number of odd elements.
. tested => fails, assumption that all elements added */


/* idea 2: iterate through array, add array[i] + array[i...]
-idea 3: iterate through array, subtracting element from target, progressing
until zero, so long as above zero. Or subtract from beginning to left
subtract, check if difference num exists in array[fails if adding more than one
element to find target]


*/
}


console.log(subsetSum([3, 7, 4, 2], 6));
module.exports = subsetSum;
