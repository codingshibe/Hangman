var name = prompt("What is your name? ");
alert("Hello " + name);

function hangman_game(){
  // An array of words for our game
  var words = ['javascript', 'monkey', 'amazing', 'tanuki', 'pancake', 'cinnabon', 'tickle', 'boop', 'western'];

  // Pick a Random Word
  var word = words[Math.floor(Math.random() * words.length)];

  // Set up the answer array
  var answerArray = [];
  for(var i = 0; i < word.length; i++){
    answerArray[i] = "_";
  }
  var remainingLetters = word.length;

  while (remainingLetters > 0){
      // Show the player their current progress

      alert(answerArray.join(" "));
      // Get a guess from the player
      var guess = prompt("Guess a letter, or click Cancel to stop playing.");
      // If the player wants to quit the game {
      if(guess === null){
        // Quit the game
        break;
      }
      // Else If the guess is not a single letter {
      else if(guess.length !== 1){
        // Tell the player to pick a single letter
        alert("Please enter a single letter.");
      }
      else {
        for(var j = 0; j < word.length; j++){
          // If the guess is in the word
          if(word[j] === guess){
            // Update the player's progress with the guess
            answerArray[j] = guess;
            remainingLetters--;

          }
        }
      }

  }
  // Congratulate the player on guessing the word
  if(remainingLetters === 0){
    alert(answerArray.join(" "));
    alert("Congratulations " + name + "! The answer was " + word);
  }
  else {
    alert("Thanks for playing!");
  }
}

hangman_game();
