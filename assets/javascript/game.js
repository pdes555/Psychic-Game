let wins = 0
let losses = 0
let guessesLeft = 10
let guesses = 0
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.getElementById("wins").innerHTML = wins++;
document.getElementById("losses").innerHTML = losses++;
document.getElementById("guessesLeft").innerHTML = guessesLeft;


let randomNumber = Math.floor(Math.random()*letters.length);
let randomLetter = letters[randomNumber];


	
document.onkeydown = function(event) {
	let keypress = String.fromCharCode(event.keyCode);
	console.log(keypress);
	
	if (keypress === randomLetter) {
		document.getElementById("wins").innerHTML = wins++;
		randomNumber = Math.floor(Math.random()*letters.length);
	} else {
		document.getElementById("guessesLeft").innerHTML = guessesLeft--;
		document.getElementById("guesses").append(keypress + ", ");
	}
	if (guessesLeft === -1) {
	guessesLeft = 10;
	document.getElementById("losses").innerHTML = losses++;
}
}




