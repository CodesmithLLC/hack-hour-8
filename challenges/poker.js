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
    let resHand1 = 0, resHand2 = 0, onePair1 = false, tOAK1 = false, fH1 = false, num1 = 0, num2 = 0, onePair2 = false, tOAK2 = false, fH2 = false; 
    let sortedHand1 = hand1.sort(function(a,b){return a-b}); 
    let sortedHand2 = hand2.sort(function(a,b){return a-b}); 
    for (let i = 0; i < sortedHand1.length-1; i++){
        if ((sortedHand1[i + 3] === sortedHand1[i]) && (sortedHand1[i + 2] === sortedHand1[i]) && (sortedHand1[i + 1] === sortedHand1[i])){
            //console.log('fOAK', sortedHand1)
            resHand1 = 7;
            num1 = sortedHand1[i];  
            
        } 
         if ((sortedHand1[i + 1] === sortedHand1[i]) && onePair1 === false){
            onePair = true; 
            //console.log('Pair!', sortedHand1[i + 1],sortedHand1[i]); 
            resHand1 = 2;
            num1 = sortedHand1[i];  
        }
         if ((sortedHand1[i + 2] === sortedHand1[i]) && (sortedHand1[i + 1] === sortedHand1[i]) && onePair1 === false){
            //console.log('tOAK!', sortedHand1[i + 2], sortedHand1[i + 1],sortedHand1[i]); 
            tOAK1 = true; 
            resHand1 = 4;
            num1 = sortedHand1[i];  
        
        }
         if ((sortedHand1[i + 2] === sortedHand1[i]) && (sortedHand1[i + 1] === sortedHand1[i]) && onePair1 === true){
            //console.log('fH!', sortedHand1); 
            num1 = sortedHand1[i];  
            resHand1 = 6;
        }
         if ((sortedHand1[i + 1] === sortedHand1[i]) && tOAK1 === true){
            //console.log('fH', sortedHand1); 
            num1 = sortedHand1[i];  
            resHand1 = 6; 
        }
    }
    for (let i = 0; i < sortedHand2.length-1; i++){
    if ((sortedHand2[i + 3] === sortedHand2[i]) && (sortedHand2[i + 2] === sortedHand2[i]) && (sortedHand2[i + 1] === sortedHand2[i])){
            //console.log('fOAK', sortedHand2)
            resHand2 = 7;
            num2 = sortedHand2[i];  
            i += 3; 
        } 
         if ((sortedHand2[i + 1] === sortedHand2[i]) && onePair2 === false){
            onePair2 = true; 
            //console.log('Pair!', sortedHand2[i + 1],sortedHand2[i]); 
            resHand2 = 2;
            num2 = sortedHand1[i];  
            
        }
         if ((sortedHand2[i + 2] === sortedHand2[i]) && (sortedHand2[i + 1] === sortedHand2[i]) && onePair === false){
            //console.log('tOAK!', sortedHand2[i + 2], sortedHand2[i + 1],sortedHand2[i]); 
            tOAK2 = true; 
            resHand2 = 4;
            num2 = sortedHand2[i];  
            
        }
         if ((sortedHand2[i + 2] === sortedHand2[i]) && (sortedHand2[i + 1] === sortedHand2[i]) && onePair2 === true){
            //console.log('fH!', sortedHand2); 
            num2 = sortedHand2[i];  
            resHand2 = 6;
        }
         if ((sortedHand2[i + 1] === sortedHand2[i]) && tOAK2 === true){
            //console.log('fH', sortedHand2); 
            num2 = sortedHand2[i];  
            resHand2 = 6; 
        }
    }
    if (resHand1 > resHand2) return 'Player 1 wins'; 
    else if (resHand1 === resHand2) return 'Draw'; 
    else return 'Player 2 wins'; 
}

module.exports = poker;
