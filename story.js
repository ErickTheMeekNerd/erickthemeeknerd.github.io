// Quiz begins, no answers correct
var correct = 0;

// Ask questions
var answer1 = prompt("What is my last name?");
if (answer1.toUpperCase() === "MARTINEZ") {
  correct += 1;
}

var answer2 = prompt("What month was I born in?");
if (answer2.toUpperCase() === "APRIL") {
  correct += 1;
}

var answer3 = prompt("How many kids do I have? Please spell out your answer.");
if (answer3.toUpperCase() === "TWO") {
  correct += 1;
}

var answer4 = prompt("What online platform do I sell on?");
if (answer4.toUpperCase() === "EBAY") {
  correct += 1;
}

var answer5 = prompt("Who is my favorite rap artist?");
if (answer5.toUpperCase() === "RUSS") {
  correct += 1;
}

// output results
alert("You got " + correct + " outta 5 questions right.")

// output rank
if (correct >= 4) {
  alert("You know me well. You may consider yourself a good friend.");
} else if (correct = 3) {
  alert("You know me decent, however, you still have much to learn.");
} else if (correct >= 2) {
  alert("You dont konw me. You dissguest me!");
} else {
  alert("You should just go kill yourself at this point. Casue you don't know shit about me.");
}
