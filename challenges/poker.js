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

// the deck state
function deck () {
  var result = [];
  var suits = {0: 'H', 1: 'D', 2: 'S', 3: 'C'};
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 13; j++) {
      result.push(suits[i] + j);
    }
  }
  return result;
}

// returns 2 decks
function shuffle (deck) {
  var cache = {};
  var shuffled = [];
  while (shuffled.length < 52) {
    var random = Math.floor(Math.random() * 52);
    if (cache[random] === undefined) {
      shuffled.push(deck[random]);
      cache[random] = true;
    }
  }
  return shuffled;
}

function poker(hand1, hand2) {
  // see if hand holds the royal Flush
  // next see if hand holds straight Flush
  //..
  //..
  //..
  // check hand for high

  // if they have the same win compare the value of those two

  // return who won
}

// console.log(deck());
var deck = deck();
var shuffled = shuffle(deck);
console.log(shuffled);
module.exports = poker;
