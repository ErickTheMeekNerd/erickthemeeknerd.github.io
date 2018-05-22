/*
This is a random number guessing game that generates a number between 1 and 6 and gives the player two attempts to guess the number.
*/

// assume the player didn't correctly guess
var correctGuess = false;

// genertaes a random number between 1 and 6
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt("Im thinking of a number between 1 and 6. What is it?");

/* test to see if the player is
1. correct
2. guessed too high
3. guessed too low
*/
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("Try again pussy. The number I'm thinking is more than " + guess + ".");
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt("Try again pussy. The number I'm thinking of is less than " + guess + ".");
  if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
  }
}

// test if the player is correct and output response
if (correctGuess) {
  alert("Great guess bitch! You got it : )");
} else {
  alert("You suck at life. It was " + randomNumber + ".");
}



// "There once was a [adjective] programmer who wanted to use Javascript to [verb] the [noun]."
//
// var verb = prompt("What's your favorite thing to do?");
// var noun = prompt("Who is a favorite person of yours? Do not include anything but the name of that person");
// var adjective = prompt("Please type an adjective");
//
// var sentence = "There once was a " + adjective;
//
// alert("All done. Ready for the messsage?");
// sentence += " programmer who wanted to use Javascript to " + verb;
// sentence += " with " + noun + ".";
// alert(sentence);

// var age = prompt("How old are you?");
// var deathAge = prompt("What age do you think you will live too?");
// var yearsToLive = parseInt(deathAge) - parseInt(age);
// alert("WOW! You have " + yearsToLive + " years to live!");
// console.log();



// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert("You rolled a " + dieRoll + "!");



// var input = prompt("Gimme any number");
// var topNumber = parseInt(input);
// var input2 = prompt("Gimme another number");
// var bottomNumber = parseInt(input2);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = randomNumber + " is the random number between " + topNumber + " and " + bottomNumber + "."
// alert(message);

// var answer = prompt("What is my favorite food?");
// if ( answer.toUpperCase() === "RICE" ) {
//   alert("Nice job, scumbag! You know me well.");
// } else {
//   alert("Fuck you! You don't know me.");
// }
