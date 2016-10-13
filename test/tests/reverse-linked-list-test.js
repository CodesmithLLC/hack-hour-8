var expect = require('expect.js');
var Node, reverseLinkedList;
try {
  Node = require('../../challenges/reverse-linked-list.js').Node;
  reverseLinkedList = require('../../challenges/reverse-linked-list.js').reverseLinkedList;
} catch (e) {
  console.log('reverse-linked-list could not be tested');
}

if (typeof Node === 'function' && typeof reverseLinkedList === 'function') {
  describe('Reverse-Linked-List Tests', function() {

    it('head and tail should be reversed', function() {
      var head = new Node(0);
      head.next = new Node(1);
      head = reverseLinkedList(head);
      expect(head.value).to.eql(1);
      expect(head.next.value).to.eql(0);
    });

    it('only one node', function() {
      var head = new Node(0);
      head = reverseLinkedList(head);
      expect(head.value).to.eql(0);
    });

    it('head is null', function() {
      var head = null;
      head = reverseLinkedList(head);
      expect(head).to.eql(null);
    });

    it('small linked list reversed successfully', function() {
      var head = new Node(0);
      var temp = head;

      for(var i = 1; i < 8; i++){
        temp.next = new Node(i);
        temp = temp.next;
      }

      head = reverseLinkedList(head);
      for(var i = 7; i > 0; i--){
        expect(head.value).to.eql(i);
        head = head.next;
      }
    });

    it('large linked list reversed successfully', function() {
      var head = new Node(0);
      var temp = head;

      for(var i = 1; i < 100; i++){
        temp.next = new Node(i);
        temp = temp.next;
      }

      head = reverseLinkedList(head);
      for(var i = 99; i > 0; i--){
        expect(head.value).to.eql(i);
        head = head.next;
      }
    });

  });
} else {
  console.log('Node and/or reverseLinkedList were not exported properly');
}
