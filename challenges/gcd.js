/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    
    //Approach: collect all common denoms of a, push into array resA, 
    //collect CDs of b, push into resB, compare highest in each res to each other,
    //work from largest to smallest in each array, if largest in resA exists in
    //resB, return that number.  With more time, I'd use spread operator
    //and since both arrays are already sorted, you can just check if the last
    //item in one array exists in another and pop if it doesn't, and check 'til
    //popped array is empty.  
    
    let resA = [], resB = [];  
    for (var i = 0; i <= a/2; i++){
        if (a % i === 0)  resA.push(i);
    }
    resA.push(a);
    for (var j = 0; j <= b/2; j++){
        if (b % j === 0)  resB.push(j);
    }
    resB.push(b);
    console.log(resA, resB);
    let resAL = resA.length, resBL = resB.length;  

    if (resAL >= resBL){
        for (var k = resAL - 1; k >= 0; k--){
        //  console.log(resA[k])
            if (resB.indexOf(resA[k]) > -1) return resA[k];
        }
    }
    else {
        for (var l = resBL - 1; l >= 0; l--){
            //console.log(resB[l])
            if (resA.indexOf(resB[l]) > -1) return resB[l];
        }
    }


    return 1; 

}
module.exports = gcd;