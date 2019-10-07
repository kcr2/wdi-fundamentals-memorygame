var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "image/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "image/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "image/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("you found a match");
    }
    else {
      console.log("sorry try again");
    }
  }
}

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

flipCard(0);
flipCard(2);
