'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '💥 Correct Number!!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.label__score').textContent = 10;

// the value of input is always a string!!!!!
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// event - something that happens on the page

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function(number) {
  document.querySelector('.label__score').textContent = number;
};
const displayHighscore = function(number) {
  document.querySelector('.label__highscore').textContent = number;
};
const displaySecretNumber = function(value) {
  document.querySelector('.secret-number').textContent = value;
};
const changeSNWidth = function(width) {
  document.querySelector('.secret-number').style.width = width;
};
const changeBackgrColor = function(color) {
  document.querySelector('body').style.backgroundColor = color;
};

/// addeventlistener method to attach eventhandler (function-expression). 1st argument - click, 2nd argument - what we want to happen. As soon as event happens - function is called!!!
document.querySelector('.btn--check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when no input
  if(!guess) {
    displayMessage('⛔ No number!');

    // when player wins
  } else if(guess === secretNumber) {
    displayMessage('🎉 Correct Number!!!');
    displaySecretNumber(secretNumber);

    changeBackgrColor('#06e250');
    changeSNWidth('30rem');

    if(score > highScore) {
      highScore = score;
      displayHighscore(highScore);
    }

    // when guess is wring (too high or too low)
  } else if(guess !== secretNumber) {
    if(score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost. Try again!');
      displayScore(0);
    }
  }
});

document.querySelector('.btn--again').addEventListener('click', function() {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Guess! (1 to 20)');
  changeBackgrColor('#222');
  changeSNWidth('15rem');
});

