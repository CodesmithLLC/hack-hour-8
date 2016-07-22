var expect = require('expect.js');
var stringRotation;
try {
  stringRotation = require('../../challenges/string-rotation.js').stringRotation;
} catch (e) {
  console.log('string-rotation could not be tested');
}

if (typeof stringRotation === 'function') {
  describe('String Rotation Test', function() {

    it('should work for no rotation', function() {
      expect(stringRotation("hello", "hello")).to.eql(true);
    });

    it('should work for rotations', function() {
      expect(stringRotation("hello", "llohe")).to.eql(true);
    });

    it('should return false if second string is not a rotation', function() {
      expect(stringRotation("hello","orang utan")).to.eql(false);
      expect(stringRotation("hello", "he")).to.eql(false);
    });
    
    it('works on short strings', function() {
      expect(stringRotation("h", "h")).to.eql(true);
      expect(stringRotation("hi", "ih")).to.eql(true);
    });
    
    it('does not think anagram is rotation', function() {
      expect(stringRotation('hello', 'loelh')).to.eql(false);
      expect(stringRotation('hello', 'elolh')).to.eql(false);
    });
  });
} else {
    console.log('stringRotation was not exported properly');
}
