
function binToDec(binary) {
  var len = binary.length;
  var dec = 0;
  var BASE = 2;
  for (var i = 0; i < len; i++){
    dec += binary[i] * Math.pow(BASE,len-1-i);
  }
  return dec;
}
//incomplete: doesn't account for plain 0. does account for leading 0



function decToBin(decimal) {
  var BASE = 2;
  var index = 0;
  var result = [];
  while (decimal - 1 * Math.pow(BASE, index) >= 0){
    index++;
  }
  index--; //found max index by subtracting 1
  for(; index >= 0; index--){
    if(decimal - 1 * Math.pow(BASE, index) >= 0){
      result.push(1);
      decimal -= Math.pow(BASE, index);
    }
    else {
      result.push(0);
    }
  }
  return result.join('');
}
