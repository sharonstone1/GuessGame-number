'use strict';
// // textContent read the element that we select into the DOM

// console.log(document.querySelector('.message').textContent);

// // change the content of the element
// document.querySelector('.message').textContent = '🎉 correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // get the guess number
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// create a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// handling click Event
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ no number';
  }

  // when the guess wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 correct number';

    // definite the secret number
    document.querySelector('.number').textContent = secretNumber;
    // definte the style when the guess wins
    document.querySelector('body').style.backgroundColor = '#95c924';
    document.querySelector('.number').style.width = '30rem';
    // implementing the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // refactoring the code
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game !';
    }
  }

  // // when the guess is too high!!
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game !';
  //   }
  // }

  // // when the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game !';
  //   }
  // }
});

// handling a click event with next element of the challenge

document.querySelector('.again').addEventListener('click', function () {
  // retore initial value and scretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // retore the condition of the message

  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // restore the original background
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
