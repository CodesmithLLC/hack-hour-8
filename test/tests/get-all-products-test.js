var expect = require('expect.js');
var getAllProducts;
try {
  getAllProducts = require('../../challenges/get-all-products.js');
} catch (e) {
  console.log('get-all-products could not be tested');
}

if (typeof getAllProducts === 'function') {
  describe('Get All Products', function() {
    it('should return [0] if array is empty', function() {
      expect(getAllProducts(null)).to.eql([0]);
      expect(getAllProducts([])).to.eql([0]);
    });

    it('should return an array of possible products', function() {
      expect(getAllProducts([1]).sort()).to.eql([1]);
      expect(getAllProducts([1, 2]).sort()).to.eql([1, 2]);
      expect(getAllProducts([1, 2, 3]).sort()).to.eql([2, 3, 6]);
      expect(getAllProducts([5, 2, 2, 3, 4]).sort()).to.eql([120, 120, 48, 60, 80]);
      expect(getAllProducts([0, 1, 2, 0]).sort()).to.eql([0, 0, 0, 0]);

    });

  });

} else {
  console.log('getAllProducts was not exported properly');
}
