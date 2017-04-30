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
let leftParen = 0, rightParen = 0, str = input.replace(/\w+/g, "");
var firstHalf = str.slice(0, Math.floor(str.length/2));
var secondHalf = str.slice(Math.floor(str.length/2));
var newSecondHalf = ''; 

/*Approach: Off the bat, I'm confused about example 3:  balancedParens(')(');  // false.  Is
this not balanced because the parens are not inside of each other?  I'm not sure I understand 
balanced parens.  

That said, when do we return false?  When the mirror image does not equal itself.  
*/

    
for (var i = 0; i < str.length; i++){
    if (str[i] === '(' || str[i] === '[' || str[i] === '{'){
        leftParen++;
    }
    else if (str[i] === ')' || str[i] === ']' || str[i] === '}'){
        rightParen++; 
    }
    
}
if (leftParen !== rightParen) return false; 


//The idea here is to flip the parens on the 2nd 
//half of the string and then see if they match the parens
//on the first half of the string - ran out of time
//check second half against firstHalf, if they're equal, parens balance (return true)

for (var j = 0; j < secondHalf.length; j++){
 if (secondHalf[j] === ')'){
     newSecondHalf += '(';
 }
 else if (secondHalf[j] === ']'){
     newSecondHalf += '[';
 }
 else if (secondHalf[j] === '}'){
     newSecondHalf += '{';
 }
}
// console.log('newSecondHalf', newSecondHalf);
var res = newSecondHalf.split('').reverse().join(''); 
console.log(res, firstHalf); 
if (res === firstHalf) return true; 
return false; 



}

module.exports = balancedParens;
