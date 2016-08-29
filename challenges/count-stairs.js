/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
        if (num < 2){
            return 1;
        }else{
            return countStairs(num-2) + countStairs(num-1);
        }
}

module.exports = countStairs;
