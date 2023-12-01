// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '23';

// handling click events!!

// defind the random number out of the function it makes sense beacuse it a stored number that should be guessInput adding it to the function will constantly change it

let score = 20;
let userScore = 0; // this is for the highscore

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber; //This is to dispaly the secret number if I'm working on the code. I moved it to when the user wins// I can comment it out!!

document.querySelector(".check").addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value); // the value is the user's input and .guess is the class and guessInput is the variable that holds the input
  console.log(guessInput, typeof guessInput);

  // when the player doesn't enter an input
  if (!guessInput) {
    console.log(
      (document.querySelector(".message").textContent = "No Number!")
    );

    // when the player enters the correct number!
  } else if (guessInput === secretNumber) {
    console.log(
      (document.querySelector(".message").textContent = "Correct Number")
    );

    // displays the correct number
    document.querySelector(".number").textContent = secretNumber;

    // css style minuplation of background when the user wins
    document.querySelector("body").style.backgroundColor = "purple";

    // css style minuplation of the random number box when the user wins
    document.querySelector(".number").style.width = "30rem";

    // to calculate the highest score
    if (score > userScore) {
      userScore = score;
      document.querySelector(".highscore").textContent = userScore;
    }

    // this is for the sorce to decrease after the user makes 20 attemps going to high
  } else if (guessInput > secretNumber) {
    if (score > 1) {
      // to end the game
      document.querySelector(".message").textContent = "Too high!";
      //the lossing message is when the value it more than the random number
      score--; // when the score decreses the game is over.
      document.querySelector(".score").textContent = score; // this score is a defind variable
    } else {
      document.querySelector(".message").textContent = "You Lost The Game!";
      document.querySelector(".score").textContent = 0;
    }

    // this is for the sorce to decrease after the user makes 20 attemps going to low
  } else if (guessInput < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score = score - 1; // other way of writing it
      document.querySelector(".score").textContent = score; //the variable
    } else {
      document.querySelector(".message").textContent = "You Lost The Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// this is to reset the whole game after the user wins and lose

//again adding the addEventListener because we are dealing with a cliked button
document.querySelector(".again").addEventListener("click", function () {
  score = 20; // the same variable let to change its value
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // restore the message box
  document.querySelector(".message").textContent = "Start guessing";

  document.querySelector(".score").textContent = score;

  // secret number box reset
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  // restoring background
  document.querySelector("body").style.backgroundColor = "blue";

  //restoring box width
  document.querySelector(".number").style.width = "15rem";
});

// done.. always come back and evalute the code step by step and understand how the process works the way it works

// this was my own code I got it right with little of mistakes and some I couldn't figure out.. but then I copied his code for reference ---------------------------------------------------
//to reset the game! this was my code it worked except when losing it doesn't reste other than that if worked perfectly and I did a code job!

// document.querySelector('.again').addEventListener('click', function() {
// if ( guessInput === secretNumber) {
//       // restoring background
//        document.querySelector('body').style.background = 'black';

//       //restoring box width
//       document.querySelector('.number').style.width = '15rem'

//       // secret number box reset
//       document.querySelector('.number').textContent = '?';

//       // restore the message box
//       document.querySelector('.message').textContent = 'Start guessing';

//       document.querySelector('.score').textContent = score;

//       document.querySelector('.guess').value = '';

// } }
// );

// I passed the chanllag--------------------------------
