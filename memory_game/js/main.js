var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne, cardTwo;
cardOne = cards[0];
cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardOne === cardTwo) {
    alert("you found a match");
  }
  else {
    alert("sorry try again");
  }
}
