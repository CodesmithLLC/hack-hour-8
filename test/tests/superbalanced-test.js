var expect = require('expect.js');
var BinaryTree, superbalanced;
try {
  BinaryTree = require('../../challenges/superbalanced.js').BinaryTree;
  superbalanced = require('../../challenges/superbalanced.js').superbalanced;
} catch (e) {
  console.log('superbalanced could not be tested');
}

if (typeof BinaryTree === 'function' && typeof superbalanced === 'function') {
  describe('Superbalanced Test', function() {
    var tree;
    beforeEach(function() {
      tree = new BinaryTree(10);
      tree.left = new BinaryTree(5);
      tree.left.left = new BinaryTree(3);
      tree.left.right = new BinaryTree(6);
      tree.right = new BinaryTree(14);
    });

    it('should detech superbalanced trees', function() {
      expect(superbalanced(tree)).to.eql(true);
    });

    it('should return false for not superbalanced trees', function() {
      tree.left.left.left = new BinaryTree(1);
      expect(superbalanced(tree)).to.eql(false);
    });
  });
} else {
  console.log('BinaryTree and/or superbalanced were not exported properly');
}
