var expect = require('expect.js');
var insertionSort;
try {
    insertionSort = require('../../challenges/insertion-sort.js');
} catch (e) {
    console.log('insertionSort could not be tested');
}

if (typeof insertionSort === 'function') {
    describe('Insertion Sort Test', function() {
        it('should work for unsorted arrays', function() {
            expect(insertionSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
            expect(insertionSort([7,8,3,9,2])).to.eql([2,3,7,8,9]);
            expect(insertionSort([9,7,8,7,8,0,2])).to.eql([0,2,7,7,8,8,9]);
        });
        it('should work for sorted arrays', function() {
          expect(insertionSort([1,2,3,4,5])).to.eql([1,2,3,4,5]);
          expect(insertionSort([1,1,1,2,2])).to.eql([1,1,1,2,2]);
        });
        it('should return empty array if given empty array', function() {
          expect(insertionSort([])).to.eql([]);
        });
    });
} else {
    console.log('insertionSort was not exported properly');
}
