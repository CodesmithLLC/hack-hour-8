var expect = require('expect.js');
var ZipList,Node;

try {
  ZipList = require('../../challenges/zip-linked-lists.js').zip;
  Node = require('../../challenges/zip-linked-lists.js').Node;
} catch(error) {
  console.log('zip-linked-list could not be tested');
}

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }
// LinkedList.prototype.add = function(value) {
//   var node = new Node(value);
//    if(this.head === null) {
//     this.head = node;
//     this.tail = node;
//    } else {
//       this.tail.next = node;
//       this.tail = node;
//    }
// }

var list1, list2;
if(typeof ZipList === 'function') {
  describe('zip-linked-list', function() {
    beforeEach(function() {
      list1 = new Node(1);
      list1.next = new Node(3);
      list1.next.next = new Node(5);
      list2 = new Node(2);
      list2.next = new Node(4);
      list2.next.next = new Node(6);
    });


    it('zips two lists into one', function() {
      var zip = ZipList(list1, list2);
      expect(zip.value).to.eql(1);
      expect(zip.next.value).to.eql(2);
      expect(zip.next.next.value).to.eql(3);
      expect(zip.next.next.next.next.next.value).to.eql(6);
    });

    it('should return list1 if list2 is missing', function() {
      zip = ZipList(list1);
      expect(zip.value).to.eql(1);
      expect(zip.next.value).to.eql(3);
      expect(zip.next.next.value).to.eql(5);
    });

    it('should return list2 if list1 is missing', function() {
      zip = ZipList(list2);
      expect(zip.value).to.eql(2);
      expect(zip.next.value).to.eql(4);
      expect(zip.next.next.value).to.eql(6);
    });
  });
} else {
  console.log('zip-linked-list was not exported properly');
}
