var expect = require('expect.js');
var Stack;

try {
  Stack = require('../../challenges/max-stack.js');
} catch (e) {
  console.log('max-stack could not be tested');
}

if (typeof Stack === 'function') {
  
  describe('Max Stack Tests', function() {
    var stack;
    
    describe('Push / Pop functionality', function() {
      
      beforeEach(function() {
        stack = new Stack();
      });
      
      it('items can be pushed onto the stack', function() {
        expect(stack.push(8)).to.equal(1);
        expect(stack.push(17)).to.equal(2);
        expect(stack.push(2)).to.equal(3);
      });

      it('items can be popped from the stack', function() {
        stack.push(8);
        stack.push(17);
        stack.push(2);
        expect(stack.pop()).to.equal(2);
        expect(stack.pop()).to.equal(17);
        expect(stack.pop()).to.equal(8);
      });
      
    });
    
    describe('getMax functionality', function() {
      
      beforeEach(function() {
        stack = new Stack();
      });
      
      it('getMax should return undefined if nothing in stack', function() {
        expect(stack.getMax()).to.equal(undefined);
      });
      
      it('should return correct max after a series of pushes', function() {
        stack.push(18);
        stack.push(32);
        stack.push(19);
        stack.push(40);
        expect(stack.getMax()).to.equal(40);
      });

      it('should still return correct max after max is popped', function() {
        stack.push(18);
        stack.push(32);
        stack.push(19);
        stack.push(40);
        expect(stack.pop()).to.equal(40);
        expect(stack.getMax()).to.equal(32);
        expect(stack.pop()).to.equal(19);
        expect(stack.getMax()).to.equal(32);
        expect(stack.pop()).to.equal(32);
        expect(stack.getMax()).to.equal(18);
        expect(stack.pop()).to.equal(18);
      });
      
      it('if max value exists twice in the stack, the correct max should still be returned if one of the maxes is popped', function() {
        stack.push(18);
        stack.push(18);
        stack.push(32);
        stack.push(32);
        expect(stack.getMax()).to.equal(32);
        stack.pop();
        expect(stack.getMax()).to.equal(32);
        stack.pop();
        expect(stack.getMax()).to.equal(18);
        stack.pop();
        expect(stack.getMax()).to.equal(18);
        stack.pop();
        expect(stack.getMax()).to.equal(undefined);
      });
      
    });

  });
} else {
  console.log('Stack was not exported properly');
}
