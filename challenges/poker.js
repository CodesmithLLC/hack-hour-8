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

  let cardcount1 = {};
  let cardcount2 = {};
  let flag = false;
  let player1 = [];
  let player2 = [];

  function determineHand {
    for (var i = 0; i < 6; i++) {
      if (!cardcount1[hand1[i]]) cardcount1(hand1[i]);
      else cardcount1[hand1[i]] = cardcount1[hand1[i]]+1;
      if (!cardcount2[hand2[i]]) cardcount2(hand2[i]);
      else cardcount2[hand2[i]] = cardcount2[hand2[i]]+1;
    }
    console.log(cardcount1, cardcount2)
  }

  iterate through, take count of each item in an obj
  evaluate whether there is one step between each item, indicate flag
  evaluate obj for 1 pair, 2, pair, 3 of a kind, 4 of a kind
  give score of 1-5 for each match by pushing
  sort each player's array and return logic statement of which is greater





}

module.exports = poker;
