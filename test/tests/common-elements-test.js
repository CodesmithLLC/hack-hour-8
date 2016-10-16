var expect = require('expect.js');
var commonElements;
try {
  commonElements = require('../../challenges/common-elements.js');
} catch (e) {
  console.log('common-elements could not be tested');
}

if (typeof commonElements === 'function') {

  describe('Common Elements', function() {

    it('should return Nothing in Common!', function() {
      expect(commonElements([],['dog'],[1,2,'dog'],['dog'])).to.eql("Nothing in Common!");
      expect(commonElements([1,2,5,6],['dog'],[1,2,'dog'],['dog'])).to.eql('Nothing in Common!');
    });

    it('should return a array of strings', function() {
      expect(commonElements(['dog','cat',3,4],['dog','cat'],[1,2,'dog','cat'],['dog', 'cat'])).to.eql(['dog', 'cat']);
      expect(commonElements(['dog','Ferret',3,4],[56,75,'dog','Ferret'],[1,2,'dog','Ferret'],[4,6,7,'dog', 'Ferret'])).to.eql(['dog', 'Ferret']);
    });

    it('should return a array of numbers', function() {
      expect(commonElements(['dog',3,4,5,66,69,34],[3,4,5,66,45,67,'cat'],[3,4,5,66,78,'dog','cat'],[3,4,5,66,78,'dog', 'cat'])).to.eql([3,4,5,66]);
    });

    it('should return a array of strings and numbers', function() {
      expect(commonElements(['dog',3,69,34],['dog',3,45,67,'cat'],[3,78,'dog','cat'],[3,78,'dog', 'cat'])).to.eql(['dog', 3]);
    });

    it('should return a array of strings and numbers without duplicates', function() {
      expect(commonElements(['dog','dog', 3,3],['dog','dog',3,3],['dog','dog', 3,3],['dog','dog',3,3])).to.eql(['dog', 3]);
    });

  });

} else {
  console.log('commonElements was not exported properly');
}
