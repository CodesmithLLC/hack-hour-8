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

// needs some tlc - almost
function rotateGrid(grid, n) {
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      // swap
      let temp = grid[j][n - (i + 1)];
      grid[j][n - (i + 1)] = grid[i][j];
      grid[i][j] = temp;
    }
  }
  return grid;
}


// function rotateGrid(grid, n) {
// var temp,
// lastTemp,
// i,
// j,
// k;

// this loop indicates how many `rotations` take place
// for (i = 1; i < n; i++) {

// this loop iterates through the 1st dimension
// for (j = 0; j < grid.length; j++) {

// rotates `top` part of grid
// if (j === 0) {
// for (k = grid[j].length - 1; k > 0; k--) {
// if (k === grid[j].length - 1) {
// temp = grid[j + 1][grid[j + 1].length - 1];
// grid[j + 1][grid[j + 1].length - 1] = grid[j][k];
// grid[j][k] = grid[j][k - 1];
// } else {
// grid[j][k] = grid[j][k - 1];
// }
// }
// }

// rotates `bottom` part of grid
// else if (j === grid.length - 1) {
// for (k = 0; k < grid[j].length - 1; k++) {
// if (k === 0) {
// grid[j - 1][0] = grid[j][k];
// grid[j][k] = grid[j][k + 1];
// } else if (k === grid[j].length - 2) {
// grid[j][k] = temp;
// } else {
// grid[j][k] = grid[j][k + 1];
// }
// }
// }

// rotates `middle` sections of grid
// else {
// rotates first column
// grid[j - 1][0] = grid[j][0]

// rotates last column
// lastTemp = grid[j + 1][grid[j + 1].length - 1];
// grid[j + 1][grid[j + 1].length - 1] = temp;
// temp = lastTemp;
// }
// }
// }
// return grid;
// }


// module.exports = rotateGrid;
var sampleGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateGrid(sampleGrid, 3));
