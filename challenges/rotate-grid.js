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

function rotateGrid(grid, n) {
  let container = [];
  for (let i = n - 1; i >= 0; i--) {
    const innerContainer = [];
    for (let x = n - 1; x >= 0; x--) {
      innerContainer.push(grid[x][i]);
    }
    container.push(innerContainer);
  }
  return container.reverse();
}

module.exports = rotateGrid;
