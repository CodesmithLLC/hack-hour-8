var expect = require('expect.js');
var phonebook;
var makeJazBookIntoARealPhoneBookObject;
var jazbook = [['alex','301-844-3421'],['david','301-844-0978'],['jae','301-844-1211'],
['jasmine','1800-974-4539'],['travis','301-844-8505'],['arnold','301-844-5423']];


try {
  phonebook = require('../../challenges/phonebook.js').phonebook;
  makeJazBookIntoARealPhoneBookObject=require('../../challenges/phonebook.js').makeJazBookIntoARealPhoneBookObject;
} catch (e) {
  console.log('phonebook could not be tested');
}

if (typeof makeJazBookIntoARealPhoneBookObject === 'function' && typeof phonebook === 'function') {
  var newPhoneBook = makeJazBookIntoARealPhoneBookObject(jazbook);
  describe('Phonebook Test', function() {
    it('should return array with empty string for empty string', function() {
      expect(phonebook([],'travis')).to.eql(false);
    });

    it('should find all phonebook', function() {
      expect(phonebook(jazbook,'jasmine')).to.eql('1800-974-4539');
      expect(phonebook(jazbook,'travis')).to.eql('301-844-8505');
    });

    it('should not find people who do not exist phonebook', function() {
      expect(phonebook(jazbook,'travissss')).to.eql(false);
      expect(phonebook(jazbook,'rob')).to.eql(false);
    });
    it('should return an object with the correct keys and values', function(){
      // for(var i=0;i<jazbook.length;i++) {
      //   var person = jazbook[i];
      //   expect(newPhoneBook[person[0]]).to.eql(person[1]);
      // }
      expect(newPhoneBook.travis).to.eql('301-844-8505');
    });
  });
} else {
  console.log('phonebook was not exported properly');
}
