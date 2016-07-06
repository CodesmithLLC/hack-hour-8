/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 function balancedParens(input){
   if (input.length === 1) return false;
   input = input.split("");
   var output = [];
   for (var j = 0; j < input.length; j++) {
   	if (input[j] === '(' || input[j] === ')' || input[j] === '{' || input[j] === '}' || input[j] === '[' || input[j] === ']') output.push(input[j]);
   }
   var count1 = 0;
   var count2 = 0;
   var count3 = 0;
   for (var i = 0; i < output.length; i++) {
   	if (count1 === -1 || count2 === -1 || count3 === -1) return false;
   	if (count1 > 0 && count2 === 0 || count3 === 0) return false;
   	if (count2 > 0 && count1 === 0 || count3 === 0) return false;
   	if (count3 > 0 && count1 === 0 || count2 === 0) return false;
     if (output[i] === '(') count1++;
     if (output[i] === '[') count2++;
     if (output[i] === '{') count3++;
     if (output[i] === ')') count1--;
     if (output[i] === ']') count2--;
     if (output[i] === '}') count3--;
   }
   if (count1 === 0 && count2 === 0 && count3 === 0) return true;
   return false;
 }

module.exports = balancedParens;
