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
  function isfourOfAKind(hand) {
    const numberOf = {};

    hand.forEach(card => {
      if (numberOf[card]) numberOf[card] += 1;
      else numberOf[card] = 1;
    });

    for (let card in numberOf) {
      if (numberOf[card] === 4) return card;
    }

    return false;
  }

  function isFullHouse(hand) {
    const numberOf = {};

    hand.forEach(card => {
      if (numberOf[card]) numberOf[card] += 1;
      else numberOf[card] = 1;
    });

    const cards = Object.keys(numberOf);

    if (cards.length === 2) {
      if (numberOf[cards[0]] === 3 && numberOf[cards[1]] === 2) {
        return cards[0];
      }
      if (numberOf[cards[1]] === 3 && numberOf[cards[0]] === 2) {
        return cards[1];
      }
    }

    return false;
  }

  function isStraight(hand) {
    const cards = [...hand];
    cards.sort((a, b) => a - b);

    for (let i = 0; i < cards.length - 1; i++) {
      if (Math.abs(cards[i] - cards[i + 1]) !== 1) return false;
    }

    return cards[4];
  }

  function isThreeOfAKind(hand) {
    const numberOf = {};

    hand.forEach(card => {
      if (numberOf[card]) numberOf[card] += 1;
      else numberOf[card] = 1;
    });

    for (let card in numberOf) {
      if (numberOf[card] === 3) return card;
    }

    return false;
  }

  function isPair(hand) {
    const numberOf = {};

    hand.forEach(card => {
      if (numberOf[card]) numberOf[card] += 1;
      else numberOf[card] = 1;
    });

    const cards = Object.keys(numberOf);

    if (cards.length === 4) {
      if (numberOf[cards[0]] === 2 ||
          numberOf[cards[1]] === 2 ||
          numberOf[cards[2]] === 2 ||
          numberOf[cards[3]] === 2
          ) return true;
    }

    return false;
  }

  function highCard(hand) {
    const numberOf = {};

    hand.forEach(card => {
      if (numberOf[card]) numberOf[card] += 1;
      else numberOf[card] = 1;
    });

    const cards = Object.keys(numberOf);

    if (cards.length === 5) {
      cards.sort((a, b) => a - b);
    }

    return cards[4];
  }
}

module.exports = poker;
