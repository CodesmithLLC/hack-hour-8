/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 through Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
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


function card(){
  return Math.floor(Math.random()*(13)+2);; 
}

//returns an array of poker hands (array or arrays) for 52 card deck. max 10 players.
function pokerHand(players){
  if(players > 10) {
  	return new Error('Too Many Players! 10 max players');
  }
  var hands = [];
  var deck = {
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 4,
    7: 4,
    8: 4,
    9: 4,
    10: 4,
    11: 4,
    12: 4,
    13: 4,
    14: 4
  };
  // for(var i = 0; i < players; i++){
  //   for(var j = 0; j < 5; j++){
  //     var pick = card();
  //     if(deck[pick] > 0){
      	
  //     }
  //   }
  // }
  return hands;
}

function poker(hand1, hand2) {

}

// function swiz(num){
// switch (num) {
//   case 1:
//     console.log("Player 1 wins");
//     break;
//   case 2:
//     console.log("Player 2 wins");
//     break;
//     break;
//   default:
//     console.log("Draw");
// }
// }

// swiz(1);
// swiz(2);
// swiz(3);

//console.log(pokerHand(11));

module.exports = poker;
