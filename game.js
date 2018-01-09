var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 255, 255)",
  "rgb(0, 0, 0)",
  "rgb(255, 255, 197)",
  "rgb(245, 165, 0)"
];
var divs = document.getElementsByClassName("square");
var pickedColor = colors[3];
var display = document.getElementById("colorDisplay");
display.textContent = pickedColor;

for (let i = 0; i < divs.length; i++) {
   divs[i].style.backgroundColor = colors[i];
   
}
