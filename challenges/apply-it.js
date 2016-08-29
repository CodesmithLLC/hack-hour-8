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
  var a = args;
  return func(a[1],
    a[2],
    a[3],
    a[4],
    a[5],
    a[6],
    a[7],
    a[8],
    a[9],
    a[10],
    a[11],
    a[12],
    a[13],
    a[14],
    a[15],
    a[16],
    a[17],
    a[18],
    a[19],
    a[20],
    a[21],
    a[22],
    a[23],
    a[24],
    a[25],
    a[26],
    a[27],
    a[28],
    a[29],
    a[30],
    a[31],
    a[32],
    a[33],
    a[34],
    a[35],
    a[36],
    a[37],
    a[38],
    a[39],
    a[40]);
}

module.exports = applyIt;
