var expect = require('expect.js');
var permPalin;
try {
    permPalin = require('../../challenges/perm-palin.js');
} catch (e) {
    console.log('perm-palin could not be tested');
}

if (typeof permPalin === 'function') {
    describe('Permutations Palindrome Test', function() {
        it('should return true if possible', function() {
            expect(permPalin('a')).to.eql(true);
            expect(permPalin('abab')).to.eql(true);
            expect(permPalin('olala')).to.eql(true);
        });
        it('should return false if not possible', function() {
          expect(permPalin('cbac')).to.eql(false);
          expect(permPalin('abcde')).to.eql(false);
          expect(permPalin('lalala')).to.eql(false);
        });
    });
} else {
    console.log('permPalin was not exported properly');
}
