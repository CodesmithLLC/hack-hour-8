
function sumMultiples3Or5Below1000() {
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function sumMultiplesXOrYBelowZ(x,y,z) {
  var sum = 0;
  for (var i = 0; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }
  return sum;
}
