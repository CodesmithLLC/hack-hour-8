/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

 /*
1. Create a holder array.
2. Create a for loop for n number of arrays
3. Within the for loop create a temp array and push i position of each array in the matrix into the temp array 
4. Use a for loop within the for loop  to traverse matrix.
5. push the temp array into the holder array.
6. When the loop is complete, return holder array.

 */


function rotateGrid(grid, n) {
  var holder = [];
  for (var i = 0; i < grid.length; i++) {
  	var temp = [];
  	for (var k = grid.length -1; k >= 0; k--) {
  		temp.push(grid[k][i]);
  	}
  	holder.push(temp);
  }
  return holder;
}


module.exports = rotateGrid;
