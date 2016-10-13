var expect = require('expect.js');
var addLinkedList, Node;
try {
  addLinkedList = require('../../challenges/add-linked-list.js').addLinkedList;
  Node = require('../../challenges/add-linked-list.js').Node;
} catch (e) {
  console.log('add-linked-list could not be tested');
}

function digitNode(num) {
  return new Node(+num);
}

function makeNum(num) {
  var digits = num.toString().split('').reverse();
  var numList = digitNode(digits.shift());
  var node = numList;
  digits.forEach(function(dig) {
    node.next = digitNode(dig);
    node = node.next;
  })
  return numList;
}


if (typeof addLinkedList === 'function') {
  describe('addLinkedList Tests', function() {
    it('should add single digits', function() {
      expect(addLinkedList(makeNum(2), makeNum(2))).to.eql(makeNum(4));
    });

    it('should add 2 digits', function() {
      expect(addLinkedList(makeNum(21), makeNum(32))).to.eql(makeNum(53));
    });

    it('should add 1-digit to 3-digit', function() {
      expect(addLinkedList(makeNum(215), makeNum(3))).to.eql(makeNum(218));
    });

    it('should handle a carryover', function() {
      expect(addLinkedList(makeNum(513), makeNum(295))).to.eql(makeNum(808));
    });

    it('should handle a carryover that creates a digit', function() {
      expect(addLinkedList(makeNum(913), makeNum(295))).to.eql(makeNum(1208));
    });

    it('should handle 0 as one of the numbers', function() {
      expect(addLinkedList(makeNum(0), makeNum(2951231))).to.eql(makeNum(2951231));
    });

    it('should handle very large numbers', function() {
      expect(addLinkedList(makeNum(9034543252345), makeNum(345623453245))).to.eql(makeNum(9380166705590));
    });
  });
} else {
  console.log('addLinkedList was not exported properly');
}
