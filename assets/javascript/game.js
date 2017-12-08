let wins = 0
let losses = 0
let guessesLeft = 10
let guesses = 0
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// document.getElementById("wins").innerHTML = wins;
// make an array with all letters XXXXXXXXXXXXXXXXXXX

// make a function that randomly selects a number from the array XXXXXXXXXXXXXXX

//convert number to string XXXXXXXXXXX

// make a function that catches what key im pressing XXXXXXXXXXXXXXXXXX

let randomNumber = Math.floor(Math.random()*letters.length);
let randomLetter = letters[randomNumber];

document.onkeydown = function(event) {
	let keypress = String.fromCharCode(event.keyCode);
	console.log(keypress);
	
	if (keypress === randomLetter) {
		wins++
	} else {
		guessesLeft--
		document.getElementById("guesses").append(keypress + ", ");
	}
}

if (guessesLeft === 0) {
	losses++
	document.getElementById(guessesLeft).append = ("");
}

// make an if statement that checks if that key matches the letter in the array XXXXXXXXXXXXX

// if yes add to wins and run the function to select a new letter from the array

// if not add that letter to guesses take away 1 from guessesLeft and show that letter in guesses

// make an if statement that says if guessesLeft makes it to 0 then add 1 to losses and run funtion that picks a new random letter



