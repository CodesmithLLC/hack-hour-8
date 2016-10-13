var expect = require('expect.js');
var modeMean;

try {
  modeMean = require('../../challenges/mode-mean.js');
} catch (e) {
  console.log('modeMean could not be tested');
}

if (typeof modeMean === 'function') {
  describe('modeMean test', function() {
    it('should work with an array of only one number', function() {
      expect(modeMean([2,2,2,2])).to.be(true);
      expect(modeMean([-20,-20,-20,-20])).to.be(true);
    });
    it('should work with different numbers but one obvious mode', function() {
      expect(modeMean([1,6,7,5,8,0,10,6,6,11])).to.be(true);
    });
    it('should take the max of the possible modes', function() {
      expect(modeMean([12,5,32])).to.be(false);
    });

  });
} else {
  console.log('modeMean was not exported properly');
}
