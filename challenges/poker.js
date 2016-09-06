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

	function checkStraight(hand){
		hand = hand.sort(function(a,b){
			return a > b;
		})
		let straight = hand.reduce(function(lastCard, nextCard){
			console.log(lastCard, nextCard);
			return nextCard === lastCard + 1 ? nextCard : 0;
		});
		return straight === hand[4] ? true : false
	}
	console.log(checkStraight(hand1));

	function formHandObject(hand){
		let handObject = {};
		hand.forEach(function(card){
			handObject[card] = (handObject[card] || 0) + 1;
		});
		let handObject1 = {}
		for(var key in handObject){
			if(handObject1[handObject[key]]){
				handObject1[handObject[key]].push(key)
			}
			else{
				handObject1[handObject[key]] = [key];
			}
		}
		return handObject1;
	}
	let hand1Object = formHandObject(hand1);
	console.log(hand1Object)

	function compareHands(hand1Object, hand2Object){
		if
	}
}

poker([2,1,6,2,2]);

module.exports = poker;
