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
  const res = [...grid];
  const t = [...grid[0]];
  const b = [...grid[n - 1]];
  const r = [];
  const l = [];

  grid.forEach(el => r.push(el[n - 1]));
  grid.forEach(el => l.push(el[0]));

  for (let i = 0; i < n; i++) { // replace top with left
    res[0][i] = l[i];
  }

  for (let i = n - 1, j = 0; i >= 0; i--, j++) { // replace bottom with right
    res[n - 1][i] = r[j];
  }

  for (let i = 0; i < n; i++) { // replace left with bottom
    res[i][0] = b[i];
  }

  for (let i = 0; i < n; i++) { // replace right with top
    res[i][n - 1] = t[i];
  }

  return res;
}

module.exports = rotateGrid;
