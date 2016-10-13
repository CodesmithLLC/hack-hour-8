var expect = require('expect.js');
var matchWord;
try {
  matchWord = require('../../challenges/match-word.js');
} catch (e) {
  console.log('match-word could not be tested');
}

if (typeof matchWord === 'function') {
  describe('matchWord Tests', function() {
    it('should work for one word', function() {
      expect(matchWord('__END_DNE-----')).to.be(true);
    });
    it('should not be fooled by palindromes', function() {
      expect(matchWord('__ENDDNE__')).to.be(false);
    });
    it('should be case-insensitive', function() {
      expect(matchWord('IF()()fi[]')).to.be(true);
    });
    it('should validate the order of the closing words', function() {
      expect(matchWord('for__if__rof__fi')).to.be(false);
    });
    it('should handle nesting', function() {
      expect(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')).to.be(true);
    });
    it('should handle the empty string', function() {
      expect(matchWord('')).to.be(true);
    });
  });
} else {
  console.log('matchWord was not exported properly');
}
