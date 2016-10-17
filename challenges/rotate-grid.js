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
 *
 */

// not working for 2x2 or 4x4 grid
function rotateGrid(grid, n) {
  const moved = [];
  let temp;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // swap if not 'swapped' yet
      if (moved.indexOf(grid[j][i]) < 0) {
        temp = grid[j][i];
        moved.push(grid[j][i]);
        grid[j][i] = grid[i][j];
        grid[i][j] = temp;
      }
    }
  }
  return grid.map(ele => ele.reverse());
  // return grid;
}

module.exports = rotateGrid;
// var sampleGrid = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];

// console.log(rotateGrid(sampleGrid, 3));
