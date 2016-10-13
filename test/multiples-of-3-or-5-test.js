var expect = require('expect.js');

try {
  threeOrFive = require('../../challenges/multiples-of-3-or-5.js');

  sumMultiples3Or5Below1000 = threeOrFive.sumMultiples3Or5Below1000;
  sumMultiplesXOrYBelowZ = threeOrFive.sumMultiplesXOrYBelowZ;

} catch (e) {
  console.log('multiples of 3 or 5 could not be tested');
}

if (typeof sumMultiples3Or5Below1000 === 'function' && typeof sumMultiplesXOrYBelowZ === 'function') {

  describe('Multiples-of-3-or-5 Test', function() {

    it('sumMultiples3Or5Below1000 returns correct result', function() {
      expect(sumMultiples3Or5Below1000()).to.eql(233168);
    });

    it ('sumMultiplesXOrYBelowZ returns correct result', function() {
      expect(sumMultiplesXOrYBelowZ(4, 5, 10)).to.eql(17);
      expect(sumMultiplesXOrYBelowZ(5, 9, 1293)).to.eql(241449);
    });

  });

} else {
  console.log('multiples-of-3-or-5 was not exported properly');
}
