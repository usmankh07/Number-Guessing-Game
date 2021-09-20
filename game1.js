let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();





function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultPara p');
  for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  

  randomNumber = Math.floor(Math.random() * 100) +1;
}


function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previsous Guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  
  
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulation! You are right.';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if ( guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lastResult.style.backgroundColor = '#000';
    lastResult.style.color = '#fff';
    setGameOver();
    
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red'; 
    lastResult.style.color = 'white'; 
    
    if ( userGuess < randomNumber) {
      lowOrHi.textContent = 'Your guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high';
    }
  }  
  guessCount++;
  guessField.value = '';
  guessField.focus();
  
  
}
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}


guessSubmit.addEventListener('click', checkGuess);

