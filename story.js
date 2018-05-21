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

var answer = prompt("What is my favorite food?");
if ( answer.toUpperCase() === "RICE" ) {
  alert("Nice job, scumbag! You know me well.");
} else {
  alert("Fuck you! You don't know me.");
}
