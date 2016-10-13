var expect = require('expect.js');
var drawStairs;
try {
  drawStairs = require('../../challenges/draw-stairs.js');
} catch (e) {
  console.log('draw-stairs could not be tested');
}

var logOutput;

if (typeof drawStairs === 'function') {

  function getLogOutput() {
    logOutput = '';
    console.nativeLog = console.log;
    console.log = function() {
      logOutput += [].join.call(arguments, ' ') + '\n';
    }

    process.stdout.nativeWrite = process.stdout.write;
    process.stdout.write = function() {
      logOutput += arguments[0];
    }
  }

  function resetConsole() {
    console.log = console.nativeLog;
    process.stdout.write = process.stdout.nativeWrite;
  }

  describe('drawStairs Test', function() {
    it('should print stairs of 3', function() {
      getLogOutput();
      drawStairs(3);
      resetConsole();
      expect(logOutput).to.be(`  *
 **
***
`     );
    });
    it('should print stairs of 8', function() {
      getLogOutput();
      drawStairs(8);
      resetConsole();
      expect(logOutput).to.be(`       *
      **
     ***
    ****
   *****
  ******
 *******
********
`     );
    });
    it('should print stairs of 1', function() {
      getLogOutput();
      drawStairs(1);
      resetConsole();
      expect(logOutput).to.be('*\n');
    });
  });
} else {
  console.log('drawStairs was not exported properly');
}
