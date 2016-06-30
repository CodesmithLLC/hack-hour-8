/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	var mean = Math.floor(
		array.reduce(function(previous, current){
   			return previous + current;
 		})/array.length);

	function modeCalc(arr) {
   		var sorted = arr.sort(function(a, b) {
    					return b - a;
   					});
   
   		var uniques = [];
   		var uniquesCount =[];
   		var mode;
   		
   		for(var i = 0; i < sorted.length; i++) {
     		if(sorted.indexOf(sorted[i]) === i) uniques.push(sorted[i]);
   		}
   
  		for(var j = 0; j < uniques.length; j++) {
          var counter = 0;
          for(var k = 0; k < sorted.length; k++) {
            if(uniques[j] === sorted[k]) {
              counter++;
            }
           }
           uniquesCount.push(counter);
        }

        mode = uniques[uniquesCount.indexOf(Math.max.apply(null, uniquesCount))];  

   		return mode;
 	}
 
 	var mode = modeCalc(array);
 
 
 	console.log('mean '+mean) ;
 	console.log('mode '+mode) ;
 	console.log( mean === mode ? true : false );
 	return mean === mode ? true : false;
}


module.exports = modemean;
