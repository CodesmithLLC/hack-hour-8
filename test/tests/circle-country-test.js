var expect = require('expect.js');

var circleCountry;
try {
  circleCountry = require('../../challenges/circle-country.js');
} catch (e) {
  console.log('circle-country could not be tested');
}

if (typeof circleCountry === 'function') {
  
  describe('circleCountry', function() {
  
    it('should work from the origin with one circle to cross', function() {
      expect(circleCountry([0], [0], [2], 0, 0, 2, 2)).to.be(1);
    });

    it('should work from the origin with two circles to cross', function() {
      expect(circleCountry([0, 0], [0, 0], [2, 3], 0, 0, 4, 0)).to.be(2);
    });

    it('should work with no circles to cross', function() {
      expect(circleCountry([0, 0], [0, 0], [2, 3], -5, 5, 5, -5)).to.be(0);
    });

    it('should work with some circles to cross and not others', function() {
      expect(circleCountry([-1, 0, 0, 4], [0, 0, 0, 4], [1, 3, 6, 1], 1, 0, 4, 4)).to.be(2);
    });

    it('should work with decimal numbers', function() {
      expect(circleCountry([-1, 0, 0, 4], [0, 0, 0, 4], [1, 3, 6, 0.1], 1, 0, 4, 4)).to.be(2);
    });

  });

} else {
  console.log('circleCountry was not exported properly');
}
