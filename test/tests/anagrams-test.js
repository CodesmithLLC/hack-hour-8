var expect = require('expect.js');
var anagrams;
try {
  anagrams = require('../../challenges/anagrams.js');
} catch (e) {
  console.log('anagrams could not be tested');
}

if (typeof anagrams === 'function') {
  describe('Anagrams Test', function() {
    it('should return array with empty string for empty string', function() {
      expect(anagrams('')).to.eql(['']);
    });

    it('should find all anagrams', function() {
      expect(anagrams('a')).to.eql(['a']);
      expect(anagrams('ab').sort()).to.eql(['ab','ba'].sort());
      expect(anagrams('abc').sort()).to.eql(['abc','acb','bac','bca','cab','cba'].sort());
    });

    it('should not return duplicate anagrams', function() {
      expect(anagrams('aa')).to.eql(['aa']);
      expect(anagrams('aab').sort()).to.eql(['aab','baa','aba'].sort());
      expect(anagrams('aabb').sort()).to.eql(['aabb','bbaa','abba','baba','abab','baab'].sort());
    });
  });
} else {
  console.log('anagrams was not exported properly');
}
