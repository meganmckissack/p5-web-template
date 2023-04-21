function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container'); //make sure this matches your html id name
  background(220);
}

function draw() {
  fill(186,85,211);
  circle(mouseX, mouseY, 50);
}

//this function checks to see if the window has been resized and updated the width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}