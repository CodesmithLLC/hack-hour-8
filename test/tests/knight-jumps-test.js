var expect = require('expect.js');
var knightjumps;
try {
  knightjumps = require('../../challenges/knight-jumps.js');
} catch (e) {
  console.log('knightjumps could not be tested');
}

if (typeof knightjumps === 'function') {
  describe('knightjumps Test', function() {
    it('should work for squares in the middle where there are 8 moves', function() {
      expect(knightjumps('(4 5)')).to.eql(8);
      expect(knightjumps('(3 4)')).to.eql(8);
    });

    it('should work in the corner where there are 2 moves', function() {
      expect(knightjumps('(1 1)')).to.eql(2);
      expect(knightjumps('(8 8)')).to.eql(2);
    });

    it('should work on the edge where there are 4 moves', function() {
      expect(knightjumps('(1 3)')).to.eql(4);
      expect(knightjumps('(6 8)')).to.eql(4);
    });

    it('should work where there are 3 moves', function() {
      expect(knightjumps('(2 1)')).to.eql(3);
      expect(knightjumps('(7 8)')).to.eql(3);
    });
  });
} else {
  console.log('knight-jumps was not exported properly');
}
