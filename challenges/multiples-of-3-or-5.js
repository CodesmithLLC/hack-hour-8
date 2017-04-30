// If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
//below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  var sum3 = 0;
  var sum5 = 0;
  var sum15 = 0;

  function multipleSum(target, num){
    let evenlyDivisibleNum = Math.floor(num/target);
    let sum = (evenlyDivisibleNum * (evenlyDivisibleNum * target + target)/2);
    console.log(sum);
    return sum;
}

sum3 = multipleSum(3, 1000);
sum5 = multipleSum(5, 1000);
sum15 = multipleSum(15, 1000);
return (sum3 + sum5) - sum15;

}


//extension make it dynamic function that takes input x,y,z
//and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x,y,z) {
  var sumx = 0;
  var sumy = 0;
  var sumz = 0;

  function multipleSum(target, num){
    let evenlyDivisibleNum = Math.floor(num/target);
    let sum = (evenlyDivisibleNum * (evenlyDivisibleNum * target + target)/2);
    return sum;
}

sumx = multipleSum(3, 1000);
sumy = multipleSum(5, 1000);
sumz = multipleSum(15, 1000);
return (sumx + sumy) - sumz;
}

var objectToExport={
  sumMultiples3Or5Below1000:sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ:sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;
