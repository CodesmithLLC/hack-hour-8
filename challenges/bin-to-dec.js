/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */
function log(it){
  console.log(it);
}

function pow(base, power){
  if(power === 0){
    return 1;
  }
  return base * pow(base, power - 1);
}

function binToDec(binary) {
  var binArr = binary.slice().split('').reverse();
  var num = 0;
  binArr.forEach(function(ele, idx){
    if(ele === '1'){
      num += pow(2, idx); 
    }
  })

  return num;
}


module.exports = binToDec;
