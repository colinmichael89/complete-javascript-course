'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value = 21;
// document.querySelector('.guess').value;

// // GUESS MY NUMBER GAME
// let secretNumber = Math.trunc(Math.random() * 2 + 1);
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // No input
//   if (!guess) {
//     // document.querySelector('.message').textContent = 'Enter a number!';
//     displayMessage('Enter a number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = 'You got it!';
//     displayMessage('You got it!');
//     document.querySelector('.number').textContent = secretNumber;

//     // Change background color
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     // Change the number color
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // Refactor of code below using turnerary
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       //   document.querySelector('.message').textContent =
//       //     guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉';
//       displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       //   document.querySelector('.message').textContent = 'You lost the game!';
//       displayMessage('You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //     // Guess too high
//   //   } else if (guess > secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too High!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You lost the game!';
//   //       document.querySelector('.score').textContent = 0;
//   //     }

//   //     // Guess too low
//   //   } else if (guess < secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too Low!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You lost the game!';
//   //       document.querySelector('.score').textContent = 0;
//   //     }
//   //   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 2 + 1);
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#000000';
// });

// GUESS MY NUMBER GAME FULL REFACTOR
let secretNumber = Math.trunc(Math.random() * 10 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    displayMessage('Enter a number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('You got it!');
    document.querySelector('.number').textContent = secretNumber;
    // Change background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change the number color
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Refactor of code below using turnerary
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Reset to play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
});
