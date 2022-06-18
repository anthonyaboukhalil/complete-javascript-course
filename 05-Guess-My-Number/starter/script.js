'use strict';
const guess = document.querySelector('.guess');
const btn = document.querySelector('.check');
let ranNum = Math.floor(Math.random() * 20 + 1);
const secretNum = document.querySelector('.number');
const score = document.querySelector('.score');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
const again = document.querySelector('.again');

btn.addEventListener('click', function () {
  console.log(guess.value);
  console.log(ranNum);
  if (!guess.value) {
    message.innerHTML = 'Please enter a number';
    return;
  }
  if (+guess.value === +ranNum) {
    document.body.style.backgroundColor = 'green ';
    message.innerHTML = 'You Won!';
    secretNum.innerHTML = +ranNum;
    highScore.textContent = score.textContent;
  } else if (guess.value > ranNum) {
    message.innerHTML = 'Too High!';
    adjustScore();
  } else if (guess.value < ranNum) {
    message.innerHTML = 'Too Low!';
    adjustScore();
  }
});

const adjustScore = function () {
  if (score.textContent > 0) score.textContent = +score.textContent - 1;
  else {
    document.body.style.backgroundColor = 'red ';
    message.innerHTML = 'You Lost :(';
    playAgain();
  }
};

const playAgain = function () {
  message.innerHTML = 'Start guessing...';
  guess.value = ' ';
  document.body.style.backgroundColor = '#222';
  secretNum.innerHTML = '?';
  score.textContent = 20;
};
again.addEventListener('click', function () {
  ranNum = Math.floor(Math.random() * 20 + 1);
  playAgain();
});
