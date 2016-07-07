/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

const avg = (sum, freq) => Math.floor(sum / freq)

const getVals = (obj) => {
  const valList = []
  for( let k in obj) {
    valList.push(obj[k])
  }
  return valList
}

const getKeys = (obj) => Object.keys(obj)


function modemean(array) {
  const modes = {
    max: 0,
    key: ''
  }

  let mode
  const mean = avg(
     array.reduce((sum, next) => sum += next
        ), array.length)

  const freq = array.reduce((tbl, next) => {
    if (tbl[next]) tbl[next] += 1
    else {
      tbl[next] = 1
    }
    return tbl
  }, {})

  // get the max
  for (let k in freq) {
    if (freq[k] > modes.max) {
      modes.max = freq[k]
      modes.key = k
    }
  }

  // check if any keys have same mode, if so take the max key
  for (let k in freq) {
    if (freq[k] === modes.max)  mode = Math.max(modes.key, k)
  }

  return mean === mode
}
module.exports = modemean;
