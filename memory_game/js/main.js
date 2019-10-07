var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var cardCount = 0;
//checks if cards match and resets if no match or all cards have been flipped.
//calls addpoint() if match.
function checkForMatch() {
  cardCount += 1;
  if (cardCount === 4) {
    cardCount = 0;
    document.getElementById('game-board').innerHTML = "";
    createBoard();
  }
  if (cardsInPlay.length % 2 === 0) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("you found a match");
      cardsInPlay = [];
      addpoint();
    }
    else {
      alert("sorry try again");
      document.getElementById('game-board').innerHTML = "";
      createBoard();
      cardsInPlay = [];
    }
  }
}
// increases the number inside the <span> in the html.
function addpoint() {
  var points = parseInt(document.getElementById('points').textContent);
  console.log(points);
  points += 1;
  document.getElementById('points').innerHTML = points;
}
//flips card and gives it the image. adds card to cards in play array.
function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}
//Creates the game board and gives card attributes.
function createBoard () {
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();
