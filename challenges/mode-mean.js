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
	var mean = Math.floor(array.reduce( (prev, curr) => prev + curr )/array.length);
	
	var mode = modeFinder();
	
	function modeFinder(){
		var counter = {};
		for(var i = 0; i< array.length; i++){
			
			if(counter[array[i]] === undefined){
        counter[array[i]] = 1;
			} else {
				counter[array[i]]++;
			}
		}

		var maxCount = 0;
		var maxCountKey;
		for(var key in counter) {
      if( counter[key] > maxCount){
        maxCount = counter[key];
        maxCountKey = key;
      }
		}
		
		return Number(maxCountKey);
	}
	
	console.log( mean);
	console.log( mode);

  return (mean === mode);

}