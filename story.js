"There once was a [adjective] programmer who wanted to use Javascript to [verb] the [noun]."

var verb = prompt("What's your favorite thing to do?");
var noun = prompt("Who is a favorite person of yours? Do not include anything but the name of that person");
var adjective = prompt("Please type an adjective");

var sentence = "There once was a " + adjective;

alert("All done. Ready for the messsage?");
sentence += " programmer who wanted to use Javascript to " + verb;
sentence += " with " + noun + ".";
alert(sentence);
