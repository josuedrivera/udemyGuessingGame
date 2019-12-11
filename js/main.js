console.log("connected");

//create secret number
var secretNumber = 4;

//ask user for their guess
// var guess = prompt("Guess a number");
// var guess = Number(prompt("Guess a number"));
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is correct
// if(Number(guess) === secretNumber) {
//     alert("YOU GOT IT RIGHT!!");
// }
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!!");
}

//when guess is too high
// if(Number(guess) > secretNumber) {
//     alert("Too high, guess again!");
// }
if(guess > secretNumber) {
    alert("Too high, guess again!");
}

//otherwise, guess is too low
else {
    alert("Too low, guess again!");
}