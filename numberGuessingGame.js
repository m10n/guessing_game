function NumberGuessingGame() {
  var number = Math.floor((Math.random() * 100) + 1);
  var guesses = [];

  do {
    var input = prompt("I'm thinking of a number between 1 and 100. Try to guess my number below.");
      
    if (input === null || input === '') {
      alert("Stopping the game!");
      return;
    }
    
    var guess = Number(input);
    
    if (guesses.indexOf(guess) !== -1) {
      alert("Oops, you already guessed " + guess + ". Guess a new number.");
    } else {
      guesses.push(guess);
      if (guess > number) {
        alert("Sorry, " + guess + " is too high! Guess a lower number.");
      }
      else if (guess < number) {
        alert("Sorry, " + guess + " is too low! Guess a higher number.");
      }
    }
  } while (guess !== number);

  alert("Correct! My number was " + number + ". You guessed it in " + guesses.length + " tries.");
}

NumberGuessingGame();
