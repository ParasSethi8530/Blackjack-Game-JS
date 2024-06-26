/*let cards = [];
let sum = 0;
let hasblackjack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "per",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getrandomcard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  console.log(randomNumber);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startgame() {
  isAlive = true;
  let firstCard = getrandomcard();
  let secondCard = getrandomcard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  rendergame();
}

function rendergame() {
  sumEl.textContent = "Sum:" + sum;
  cardsEl.textContent = "Cards:";

  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you've got Blackjack!";
    hasblackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newcard() {
  if (isAlive === true && hasblackjack === false) {
    let card = getrandomcard();
    sum += card;
    cards.push(card);
    rendergame();
  }
}
*/
let introduction = {
  name: "Paras",
  age: 22,
  parasIsGood: true,
  friends: ["sparsh", "gautam"],
};

console.log(introduction.name);
console.log(introduction.friends);
