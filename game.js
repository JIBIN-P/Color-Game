/* TODO:1.Create a function for reset.
        2.Call the reset function inside the init() method.
        3.Refactor both the modes.
*/

var colors = generateRandomColors(6);
var numSquares = 6;  //To avoid the bug for reset
var divs = document.getElementsByClassName("square");
var pickedColor = randomColor();
var display = document.getElementById("colorDisplay");
var h1 = document.getElementById("h1start")
var messageDisplay = document.querySelector("#message");
var newColors = document.getElementById("new-colors");
var easyMode = document.querySelector("#easyBtn");
var hardMode = document.querySelector("#hardBtn");
display.textContent = pickedColor;

easyMode.addEventListener("click", function() {
  hardMode.classList.remove("blueButton");
  easyMode.classList.add("blueButton");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  display.textContent = pickedColor;

  for (let i = 0; i < divs.length; i++) {
    if(colors[i]) {
      divs[i].style.background = colors[i];
    }
    else {
      divs[i].style.display = "none";
    }
  }
})

hardMode.addEventListener("click", function() {
  easyMode.classList.remove("blueButton");
  hardMode.classList.add("blueButton");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  display.textContent = pickedColor;
  
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "block";
    divs[i].style.background = colors[i];
  }  
})

newColors.addEventListener("click", function() {
	if(newColors.textContent == "Play Again ?") {
		newColors.textContent = "New Colors";
		messageDisplay.textContent = " ";
  }
	//Every new game should start how it looked in the beginning
  h1.style.background = "#4682b4";
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from the array
  pickedColor = randomColor();
  //change colordisplay to resemble the picked color
  display.textContent = pickedColor;
  //change the colors of the sqaure 

	for (let i = 0; i < divs.length; i++) {
		//Assigning colors to the sqares
		divs[i].style.backgroundColor = colors[i];
	}
})

for (let i = 0; i < divs.length; i++) {
  //Assigning colors to the sqares
   divs[i].style.backgroundColor = colors[i];
   //Assigning evenlisteners to the square divs
   divs[i].addEventListener("click", function() {
   //Matching The pattern
   var clickedColor = this.style.backgroundColor;

   if(clickedColor === pickedColor) {
		//Change the Background of the h1 to th same background as the selected color
     h1.style.background = pickedColor;
	  //Modifying a span saying it's correct instead of an alert
	  messageDisplay.textContent = "Correct";
	  changeColor();
	  newColors.textContent = "Play Again ?";
   }
   else {
    //Fading The background if its incorrect
		this.style.backgroundColor = "#232323";
	  //Adding a span and modifying it saying incorrect instead of alert
	  messageDisplay.textContent = "Try Again";
   }
   });   
}

//Function for changing all the squares to the picked color is answer is correct
function changeColor() {
	for (let i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = pickedColor;
	}
}

//Function to create random selection from the colors array
function randomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Function To push random colors in our array
function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num colors to the array

  for (let i = 0; i < num; i++) {
	 //Creating a function for generating random rgb values and pushing it into the array
	 arr.push(rgbColors());    
  }
  //return that array
  return arr;
}

//Function to generate random rgb colors
function rgbColors() {
  //pick red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0-255
	var g = Math.floor(Math.random() * 256);
  //pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", " + g +", " + b +")";
}