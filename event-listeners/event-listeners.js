// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg'];
var currentIndex = 0;
 var pictures = document.getElementsByTagName ("img")[0];
 pictures.addEventListener("click",function (event) {
 	alert("You clicked me!")
 }
)
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  

  // YOUR TASK: Finish this function!
}