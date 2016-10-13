var expect = require('expect.js');
var reverseInPlace;
try {
  reverseInPlace = require('../../challenges/reverse-in-place.js');
} catch (e) {
  console.log('reverse-in-place could not be tested');
}

if (typeof reverseInPlace === 'function') {
  describe('Reverse-In-Place Tests', function() {

    it ('should work for arrays with even length', function() {
      var evenString = 'I have even length'
      var evenArray = evenString.split('');
      var result = reverseInPlace(evenArray);

      expect(result).to.eql(evenArray.reverse());
    });

    it ('should work for arrays with odd length', function() {
      var oddString = 'I have odd length'
      var oddArray = oddString.split('');
      var result = reverseInPlace(oddArray);

      expect(result).to.eql(oddArray.reverse());
    });

    it ('should return empty array if given empty array or no input', function() {
      var undefinedResult = reverseInPlace();
      var emptyArrayResult = reverseInPlace([]);

      expect(undefinedResult).to.eql([]);
      expect(emptyArrayResult).to.eql([]);
    });

    // tests actual swapping, as opposed to copying of value
    it ('BONUS: should work for non-primitive elements', function() {
      var immortal = {
        name : 'Tom Bombadil',
        age : Infinity
      }
      var mixedArray = ['hi', 42, immortal];
      var mixedArrayResult = reverseInPlace(mixedArray);

      expect(mixedArrayResult).to.eql(mixedArray.reverse());
    });
  });
} else {
  console.log(typeof reverseInPlace);
  console.log('reverseInPlace was not exported properly');
}
