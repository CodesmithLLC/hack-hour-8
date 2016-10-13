var expect = require('expect.js');
var repeatNumbers;
try {
  repeatNumbers = require('../../challenges/repeat-number.js');
} catch (e) {
  console.log('repeat-number could not be tested');
}

if (typeof repeatNumbers === 'function') {
  describe('Repeat-Number Tests', function() {

    it('repeated number in small array', function() {
      var array = [1, 2, 3, 2, 4];
      var repeated = repeatNumbers(array);
      expect(repeated).to.eql(2);
    });

    it('repeated number in a big array', function() {
      var array = [];

      for(var i = 1; i < 101; i++){
        array.push(i);
      }

      array.push(69);

      var repeated = repeatNumbers(array);
      expect(repeated).to.eql(69);
    });

  });
} else {
  console.log('repeatNumbers was not exported properly');
}
