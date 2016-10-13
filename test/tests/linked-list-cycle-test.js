var expect = require('expect.js');
var Node, hasCycle;
try {
  Node = require('../../challenges/linked-list-cycle.js').Node;
  hasCycle = require('../../challenges/linked-list-cycle.js').hasCycle;
} catch (e) {
  console.log('linked-list-cycle could not be tested');
}

if (typeof Node === 'function' && typeof hasCycle === 'function') {
  describe('Linked List Cycle Tests', function() {
    var node1;
    var node2;
    var node3;
    var node4;
    var node5;
    var node6;
    var node7;
    var node8;
    var node9;

    before(function() {
      node1 = new Node('1');
      node2 = node1.next = new Node('2');
      node3 = node2.next = new Node('3');
      node4 = node3.next = new Node('4');
      node5 = node4.next = new Node('5');
      node6 = node5.next = new Node('5');
      node7 = node6.next = new Node('5');
      node8 = node7.next = new Node('5');
      node9 = node8.next = new Node('5');


    });

    it('it should return false if argument is null', function() {
      expect(hasCycle(null)).to.eql(false);
    });

    it('it should return false when there is only one node', function() {
      expect(hasCycle(node9)).to.eql(false);
    });

    it('it should return false when no loop is present', function() {
      expect(hasCycle(node1)).to.eql(false);
      expect(hasCycle(node5)).to.eql(false);
    });

    it('it should return true when a loop is present', function() {
      node5.next = node2;
      node9.next = node6;
      expect(hasCycle(node1)).to.eql(true);
      expect(hasCycle(node6)).to.eql(true);
    });
  });
} else {
  console.log('Node and/or hasCycle were not exported properly');
}
