var runspawn = require('../util/runspawn');
var expect = require('expect.js');
var mergeArrays;

try {
  mergeArrays = require('../../challenges/merge-array.js');
} catch (e) {
  console.log('merge-array could not be tested');
}

var my_array, another_array;


if (typeof mergeArrays === 'function') {

  describe('Merge array Tests', function() {
    beforeEach(function() {
      my_array = [3,4,6,10,11,15];
      another_array = [1,5,8,12,14,19];
    });

    it('should handle equal-length arrays', function() {
      expect(mergeArrays(my_array, another_array)).to.eql([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]);
    });

    it('should handle unequal-length arrays', function() {
      expect(another_array).to.eql([1,5,8,12,14,19]);
      expect(mergeArrays([10], another_array)).to.eql([1,5,8,10,12,14,19]);
    });

    it('should handle large inputs', function(done) {
      runspawn('test/tests/merge-array-spawn', done);
    });

  });
} else {
  console.log('mergeArrays was not exported properly');
}
