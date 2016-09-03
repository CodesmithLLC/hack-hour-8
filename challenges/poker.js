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
	hand1.sort((a, b) => {
		return a - b
	})
	hand2.sort((a, b) => {
		return a - b
	})
	
	
	function checkVal(hand) {
		let handVal = 0;
		let highCard = 0;
		if (hand[hand.length - 1] - hand[0] === 4) handVal = 100000; //find for straight
		for (let i = 0; i < hand.length; i++) {
			if (hand.lastIndexOf(hand[i]) - hand.indexOf(hand[i]) === 3) handVal === 10000000;
			else if (hand.lastIndexOf(hand[i]) - hand.indexOf(hand[i]) === 2) {
				if (handVal === 100) handVal = 1000000;
				else handVal = 10000;
			}
			else if (hand.lastIndexOf(hand[i]) - hand.indexOf(hand[i]) === 1) {
				if (handVal === 100) handVal = 1000;
				else if (handVal === 10000) handVal = 1000000;
				else handVal = 100;
			}
		}
		if (handVal < 100) handVal = hand[4]
		return handVal;
	}
	if (checkVal(hand1) === checkVal(hand2)) return "draw";
	else return checkVal(hand1) > checkVal(hand2) ? "Player 1 wins" : "Player 2 wins"
	
}

module.exports = poker;
