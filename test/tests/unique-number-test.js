var expect = require('expect.js');
var uniqueNumber;
try {
  uniqueNumber = require('../../challenges/unique-number.js');
} catch (e) {
  console.log('unique-number could not be tested');
}

if (typeof uniqueNumber === 'function') {
  describe('Unique-Number Tests', function() {

    it('unique number in small array', function() {
      var array = [1, 2, 1, 3, 3];
      var unique = uniqueNumber(array);
      expect(unique).to.eql(2);
    });

    it('unique number in a big array', function() {
      var array = [];

      for(var i = 1; i < 101; i++){
        if(i !== 69)
          array.push(i);
      }

      for(var i = 100; i > 0; i--){
        array.push(i);
      }

      var unique = uniqueNumber(array);
      expect(unique).to.eql(69);
    });

  });

} else {
  console.log('uniqueNumber was not exported properly');
}
