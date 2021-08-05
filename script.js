let firstCard = 10;
let secondCard = 5;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector('#card-el');

function startGame() {
  cardEl.textContent = "Cards: " + firstCard + " " + secondCard;  
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohoo!! Blackjack!!!!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
    let card = 5;
    sum += card;
    startGame();
    console.log('Drawing a new card from the deck');
}
