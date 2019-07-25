/*
GAME FUNCTIONS
-player must guess a number between a min and max
-player gets a certain amount of guesses
-Notify player of guesses remaining 
-Notify the player of the correct answer if loses
-Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI
const UIgame = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    playAgain = document.querySelector('#playAgain');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won
    if (guess === winningNum) {
        // Disable input 
        guessInput.disabled = true;

        // Set border Green 
        guessInput.style.borderColor = 'green';

        // Set winning message
        setMessage('You Won!', 'green');
    }

    // check guess is equal to 0
    if (guess != winningNum) {
        guessesLeft--;
        setMessage(`You have ${guessesLeft} left`);
        if (guessesLeft === 0) {
            setMessage('You Lost, Game Over', 'red');
            guessInput.disabled = true;
            playAgain.style.display = 'inline-block'
            playAgain.addEventListener('click', reload);
        }
    }

});

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Reload
function reload() {
    document.location.reload();
}