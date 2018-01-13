var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(205, 92, 92)",
  "rgb(0, 255, 255)",
  "rgb(255, 255, 197)",
  "rgb(245, 165, 0)"
];
var divs = document.getElementsByClassName("square");
var pickedColor = randomColor();
var display = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
display.textContent = pickedColor;

for (let i = 0; i < divs.length; i++) {
  //Assigning colors to the sqares
   divs[i].style.backgroundColor = colors[i];

   //Assigning evenlisteners to the square divs
   divs[i].addEventListener("click", function() {
   //Matching The pattern
   var clickedColor = this.style.backgroundColor;
   if(clickedColor === pickedColor) {
		//Change the Background of the h1 to th same background as the selected color
		
	  //Modifying a span saying it's correct instead of an alert
	  messageDisplay.textContent = "Correct";
	  changeColor();
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

//Function to generate random rgb colors