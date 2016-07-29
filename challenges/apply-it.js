/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
  const obj = {};
  args.forEach((el, i) => {
     obj[i] = el;
  });

  return function () {
    return func(obj[0], obj[1], obj[2], obj[3], obj[4], obj[5],
                obj[6], obj[7], obj[8], obj[9], obj[10], obj[11],
                obj[12], obj[13], obj[14], obj[15], obj[16], obj[17],
                obj[18], obj[19], obj[20], obj[21], obj[22], obj[23],
                obj[24], obj[25], obj[26], obj[27], obj[28], obj[29],
                obj[30], obj[31], obj[32], obj[33], obj[34], obj[35]
            );
  };
}

module.exports = applyIt;
