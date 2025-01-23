function setup() {
  createCanvas(1400, 1400);
}
function draw() {
  //when mouse button is pressed, circles turn black
  if (mouseIsPressed === true) {
    fill("magenta");
  } else {
    fill("red");
  }

  //white circles drawn at mouse position
  circle(mouseX, mouseY, "100");
}