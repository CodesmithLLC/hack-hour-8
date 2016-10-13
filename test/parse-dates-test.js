var expect = require('expect.js');
var parseDates;

try {
  parseDates = require('../../challenges/parse-dates.js');  
} catch(e) {
  console.log('parse-dates could not be tested.');
}

if (typeof parseDates === 'function') {

  describe('parse-dates tests', () => {
    var today;
    
    before((done) => {
      today = new Date();
      
      done();
    });
    
    it('correctly handles am/pm in date string', (done) => {
      var parsedDate = parseDates('Today 12:01 AM');
      expect(parsedDate.getHours()).to.equal(0);
      
      parsedDate = parseDates('Today 11:01 AM');
      expect(parsedDate.getHours()).to.equal(11);
      
      parsedDate = parseDates('Today 12:01 PM');
      expect(parsedDate.getHours()).to.equal(12);
      
      parsedDate = parseDates('Today 1:01 PM');
      expect(parsedDate.getHours()).to.equal(13);
      done();
    });
    
    it('correctly parses date formatted for today', (done) => {
      var parsedDate = parseDates('Today 2:01 PM');
      
      expect(parsedDate.getDay()).to.equal(today.getDay());
      expect(parsedDate.getDate()).to.equal(today.getDate());
      expect(parsedDate.getHours()).to.equal(14);
      expect(parsedDate.getMinutes()).to.equal(1);
      done();
    });
    
    it('correctly parses date formatted for this week', (done) => {
      var parsedDate = parseDates('Monday 1:56 AM');
      var monday = last(today, 1);
      
      expect(parsedDate.getDay()).to.equal(monday.getDay());
      expect(parsedDate.getDate()).to.equal(monday.getDate());
      expect(parsedDate.getHours()).to.equal(1);
      expect(parsedDate.getMinutes()).to.equal(56);
      
      parsedDate = parseDates('Thursday 11:09 AM');
      var thursday = last(today, 4);
      
      expect(parsedDate.getDay()).to.equal(thursday.getDay());
      expect(parsedDate.getDate()).to.equal(thursday.getDate());
      expect(parsedDate.getHours()).to.equal(11);
      expect(parsedDate.getMinutes()).to.equal(9);
      done();
    });
    
    it('correctly parses date formatted by month', (done) => {
      var parsedDate = parseDates('Jan 1st 8:00 PM');
      
      expect(parsedDate.getDate()).to.equal(1);
      expect(parsedDate.getMonth()).to.equal(0);
      expect(parsedDate.getYear()).to.equal(today.getYear());
      expect(parsedDate.getHours()).to.equal(20);
      expect(parsedDate.getMinutes()).to.equal(0);
      done();
    });
    
    it('just returns today if date is improperly formatted', (done) => {
      var parsedDate = parseDates('Jan');
      expect(parsedDate.getDate()).to.equal(today.getDate());
      expect(parsedDate.getMonth()).to.equal(today.getMonth());
      expect(parsedDate.getYear()).to.equal(today.getYear());
      expect(parsedDate.getHours()).to.equal(today.getHours());
      expect(parsedDate.getMinutes()).to.equal(today.getMinutes());
      
      parsedDate = parseDates('Jan 1st 9:00');
      expect(parsedDate.getDate()).to.equal(today.getDate());
      expect(parsedDate.getMonth()).to.equal(today.getMonth());
      expect(parsedDate.getYear()).to.equal(today.getYear());
      expect(parsedDate.getHours()).to.equal(today.getHours());
      expect(parsedDate.getMinutes()).to.equal(today.getMinutes());
      done();
    });
    
  });
}

// return last occurence of a day of week not including today
function last(d, target) {
  var today = new Date(d);
  
  // avoid infinite loop if target not a day of week
  if (target < 0 || target > 6) return today;
  
  today.setDate(today.getDate() - 1);
  while(today.getDay() !== target) {
    today.setDate(today.getDate() - 1);
  }
  
  return today;
}
