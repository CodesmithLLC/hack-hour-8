// If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
//below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  var sum = 0;
	for(var i = 0; i < 10; i+=5) {
		if(i % 3 !== 0) {
			sum+= i
		}
	}
	for(var j = 0; j < 10; j+=3) {
		sum += j
	}
  return sum;
}
sumMultiples3Or5Below1000()
//extension make it dynamic function that takes input x,y,z
//and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x,y,z) {
  var sum = 0;
	for(var i = 0; i < z; i++) {
		if(i % y === 0 || i % x === 0) {
			sum += i
		}
	}
  return sum;
}


var objectToExport={
  sumMultiples3Or5Below1000:sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ:sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;
