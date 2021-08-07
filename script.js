let sum = 0;
let computerSum = 0;
let cards = [];
let computerCards = [];

let player = {
  name: "Hernan",
  age: 38,
  chips: 145,
};

let computer = {
  name: "Computer",
  age: 1,
  chips: 150,
};

let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let computerSumEl = document.querySelector("#computerSum-el");
let cardEl = document.querySelector("#card-el");
let newButton = document.querySelector("#newCard");
let playerEl = document.querySelector("#player-el");
let computerEl = document.querySelector("#computer-el");

playerEl.textContent =
  "Name: " + player.name + " | " + "Chips: " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// function compareHands() {
//     if(computerSum < 15) {
//         console.log('Computer Sum is less than 15');
//     }
// }

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let computerFirstCard = getRandomCard();
  let computerSecondCard = getRandomCard();
  computerCards = [computerFirstCard, computerSecondCard];
  computerSum = computerFirstCard + computerSecondCard;
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  computerEl.textContent = "Computer Cards: ";
  for (let i = 0; i < computerCards.length; i++) {
    computerEl.textContent += computerCards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  computerSumEl.textContent = "Sum: " + computerSum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohoo!! Blackjack!!!!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!!";
    chipsEarned(player);
    isAlive = false;
  }

  messageEl.textContent = message;
}

function chipsEarned(player) {
  if (player === player && sum > 20) {
    player.chips -= 5;
    console.log(player.chips);
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    let computerCard = getRandomCard();
    computerSum += computerCard;
    computerCards.push(computerCard);
    renderGame();
  } else {
    newButton.disabled = true;
    console.log("button disabled");
  }
}
