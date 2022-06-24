'use strict';
//declarations
let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('you must input a number!');
    //When we Win
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    displayMessage('you are correct!');
    document.querySelector('body').style.backgroundColor = '#2d3c91';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore ').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number
          ? 'Guess is higher than secret number'
          : 'Guess is lower than secret number'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you loose!.Game Over');
    }
  }
  // else if (guess > number) {
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'you loose! Game Over!';
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Guess is higher than secret number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }

  //   //when the guess is lower
  // } else {
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'you loose.Game Over';
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Guess is lower than secret number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing');
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
});
