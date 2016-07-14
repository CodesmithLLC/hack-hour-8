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

function binToDec(binary) {
var res = 0, arr = binary.toString().split(''); 
console.log(arr);
    for (var i = arr.length-1; i >= 0; i--){
        if (arr[i] === '1'){
            res += Math.pow(2, parseInt(arr.length-(i+1)));
            console.log('power', Math.pow(2, parseInt(arr.length-(i+1))));
            console.log('res', res);    
        }
    }
return res; 
}


function decToBin(num) {
var binary = [256, '100000000', 128,'1000000', 64, '1000000', 32, '10000', 16, '10000', 8, '1000', 4, '100',2, '10', 1, '1'];

res = ''; 
for (var i = 0; i < binary.length; i+=2){
    if (num >= binary[i]){
    res = binary[i+1]; 
    break; 
    }
}
return res; 
}

decToBin(29); 

module.exports = binToDec;
