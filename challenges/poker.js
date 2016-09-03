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
	let possibleHand1 = {};
	let possibleHand2 = {};

	// Check hand1's hand
	for (let i = 0; i< hand1.length; i++) {
    	let num = hand1[i];
    	possibleHand1[num] = possibleHand1[num] ? possibleHand1[num]+1 : 1;
	}
	
	let arr1 = Object.keys( possibleHand1 ).map(function ( key ) { return possibleHand1[key]; });
	
	return arr1[arr1.length-1];
	
	
	// check hand2's hand
	for (let i = 0; i< hand2.length; i++) {
    	let num = hand2[i];
    	possibleHand2[num] = possibleHand2[num] ? possibleHand2[num]+1 : 1;
	}

	let arr2 = Object.keys( possibleHand1 ).map(function ( key ) { return possibleHand1[key]; });
	
	return arr2[arr2.length-1];

	if (arr1[arr1.length-1] > arr2[arr2.length-1]) {
		return "Player 1 wins";
	} else if (arr1[arr1.length-1] < arr2[arr2.length-1]) {
		return "Player 2 wins";
	} else {
		return "Draw";
	}
}

module.exports = poker;
