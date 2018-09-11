var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;


for(var i=0; i<squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to square
	squares[i].addEventListener("click", function(){

	//grab color of picked color
	var clickedColor = this.style.backgroundColor;

	//compare color to picked Color
	if(clickedColor===pickedColor){
		messageDisplay.textContent = "You are correct";
		resetButton.textContent = "Play again?"
		for(var i =0; i<squares.length; i++) {
			squares[i].style.backgroundColor = pickedColor;
			h1.style.backgroundColor = pickedColor;

		}
	} else {
		messageDisplay.textContent = "You are wrong";
		this.style.backgroundColor = "#232323";
	}


	});
}

easyBtn.addEventListener("click", function() {
	h1.style.backgroundColor = "steelblue";
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for( var i=0; i <squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i]; 
		} else {
			squares[i].style.display = "none";
		}

	}
});

hardBtn.addEventListener("click", function() {
	h1.style.backgroundColor = "steelblue";
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for( var i=0; i <squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]; 
		squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function() {
	messageDisplay.textContent = "Let's Play Again!"
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from array
	pickedColor = pickColor();
	//change color display to match new colow
	colorDisplay.textContent = pickedColor;
	// set color of h1 back to default
	h1.style.backgroundColor = "steelblue";
	//change colors of squares
	for(var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "New Colors"; //or this.textContent..

});

//this functions returs a random element from the array
function pickColor() {
	 var random = Math.floor(Math.random()*colors.length);
	 return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	//add num random colors to an array
	for (var i =0; i<num; i++){
		//get random color and push into array
		arr[i] = randomColor();

	}
	//return array
	return arr;
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random()*255+1);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random()*255+1);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random()*255+1);
 
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

