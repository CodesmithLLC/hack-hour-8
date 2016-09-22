'use strict';
/*Build a function that takes in two arrays of five elements, with each
 * array representing a player's hand and each element
 * representing a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
 *  based on the two player's hands:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
 * (keeping in mind how cards out-rank eachother and possible draws)
 *
 * Start by hard-coding the array/hand inputs, but if there is time also
 * create a deck of cards function that creates the two arrays for you,
 * keeping in mind that there are only 4 of each card in a deck (52 total).
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 *
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 */

function poker(hand1, hand2) {

  let hands = {

  }

}



function detectMultiples(array){
  let temp;
  return array.map( (ele, idx) => {
      if(array.indexOf(ele) > -1){
          temp = array.splice(idx, 1);
          return temp;
        }
    })
}

function detectStraight(array) {
  let len = array.length;
  return array.sort((a, b) => {
    return a - b;
  }).filter((ele, idx, arr) => {
    if (idx ===  0) {
      return ele + 1 === arr[idx + 1];
    }else{
      return ele === arr[idx - 1] + 1;
    }
  }).length === 5;
}

// let arr = [4, 3, 9, 5, 7];
// console.log(detectStraight(arr));
module.exports = poker;
