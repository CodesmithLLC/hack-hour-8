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

/*
Pseudo approach. Take the array and run a for loop to extract the args. Stringify the args, concat them together, and save into arguments variable. Return the func with the arguments variable passed in. I'm assuming I'll need to use eval. Could also use bind.
*/

function applyIt(func, args) {
	
	return function(){
		var argString ='';
		var output= func;
		for(var i = 0; i < args.length; i++){
			if(i === args.length-1){
				argString = argString+JSON.stringify(args[i]);
			} else {
				argString = argString+JSON.stringify(args[i])+',';
			}
	    }
	    
	    return eval('output('+argString+')');
	};
}


module.exports = applyIt;
