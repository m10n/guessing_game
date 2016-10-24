
/*
Write a **function** that is a number guessing game. It should determine a random number from 1-100, and let the user guess the number. It should report back whether their guess is correct, too high, or too low. Important: if the user guesses a number they've already guessed, it should tell them they have previously guessed this number. Until they guess the correct number, it should continue to prompt them. Once they've guessed the correct number, it should congratulate them and tell them how many guesses they took to solve the problem (minus any duplicate guesses). Thanks for playing!

Use this link to begin playing:
https://jsfiddle.net/m10n/cj2h3zh6/4/


NB: this is just a single JavaScript function, not an app or website, so that fiddle.jshell.net pop-up alert *is* the game. Must have JavaScript/alerts enabled to play.

*/

function numberGuessingGame(){
  var number = Math.floor((Math.random() * 100) + 1);
  var guesses = [];

  while(guess !== number){
    var guess = number(prompt("I'm thinking of a number between 1 and 100. Try to guess my number below."));
    if (guesses.indexOf(guess) !== -1){
      alert("Oops, you already guessed " + guess + ". Guess a new number.");
    } else {
      guesses.push(guess);
      if (guess > number) {
        alert("Sorry, " + guess + " is too high! Guess a lower number.");
      } else if(guess < number){
        alert("Sorry, " + guess + " is too low! Guess a higher number.");
      }
    }
  }
  alert("Correct! My number was " + number + ". You guessed it in " + guesses.length + " tries.");
}

numberGuessingGame();
