var runspawn = require('../util/runspawn');
var expect = require('expect.js');
var reverseInPlace;
try {
  gcd = require('../../challenges/gcd.js');
} catch (e) {
  console.log('gcd could not be tested');
}

if (typeof gcd === 'function') {
  describe('gcd Tests', function() {

    it('should find greatest common denominator of 44 and 8', function() {
      expect(gcd(44, 8)).to.be(4);
      expect(gcd(8, 44)).to.be(4);
    });

    it('should find the gcd of 24 and 6', function() {
      expect(gcd(24, 6)).to.be(6);
    });

    it('should return 1 if there is no gcd', function() {
      expect(gcd(137, 154)).to.be(1);
    });

    it('should work for very large inputs like (100000000000002, 100000000000004)', function(done) {
      runspawn("test/tests/gcd-spawn.js", done);
    });

  });
} else {
  console.log('gcd was not exported properly');
}
