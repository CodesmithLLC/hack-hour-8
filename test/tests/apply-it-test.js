var expect = require('expect.js');
var applyIt;
try {
  applyIt = require('../../challenges/apply-it.js');
} catch (e) {
  console.log('applyIt could not be tested');
}

if (typeof applyIt === 'function') {
  describe('ApplyIt Test', function() {
    it('should apply one item', function() {
      var ankita = function(name) {
        return "My name is " + name;
      };

      var ank = applyIt(ankita, ["Ankita"]);
      expect(ank()).to.eql("My name is Ankita");
    });

    it('should apply multiple items', function() {
      var jae = function(name, age, location) {
        return name + " is " + age + " and he lives in " + location;
      };

      var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
      expect(jaero()).to.eql("Jae is 19 and he lives in South Carolina");
    });

    it('should apply only one item when function takes multiple items', function() {
      var jasmine = function(name, age) {
        if(!age){
          return "We don't know how old " + name + " is!";
        }

        else{
          return name + " is " + age + " years old!";
        }
      };

      var jmoney = applyIt(jasmine, ["Jasmine"]);
      expect(jmoney()).to.eql("We don't know how old Jasmine is!");
    });

    it('should not use the spread operator or "apply" method', function() {
      var str = applyIt.toString();
      expect(str).to.not.match(/\(\.\.\.\w+\)/);
      expect(str).to.not.match(/\.apply/);
    });
  });
} else {
  console.log('applyIt was not exported properly');
}
