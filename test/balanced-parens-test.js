var expect = require('expect.js');
var balancedParens;
try {
  balancedParens = require('../../challenges/balanced-parens.js');
} catch (e) {
  console.log('balanced-parens could not be tested');
}

if (typeof balancedParens === 'function') {
  describe('Balanced Parens Test', function() {
    it('should return true when parens are balanced', function() {
      expect(balancedParens('()')).to.eql(true);
      expect(balancedParens('(())')).to.eql(true);
    });

    it('should return false when parents are not balanced', function() {
      expect(balancedParens(')(')).to.eql(false);
      expect(balancedParens('(')).to.eql(false);
    });

    it('should work with multiple types of brackets', function() {
      expect(balancedParens('[](){}')).to.eql(true);
      expect(balancedParens('[({})]')).to.eql(true);
      expect(balancedParens('[(]{)}')).to.eql(false);
    });

    it('should work when extra character are added', function() {
      expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).to.eql(true);
      expect(balancedParens(' var hubble = function() { telescopes.awesome();')).to.eql(false);
    });
  });
} else {
  console.log('balancedParens was not exported properly');
}
