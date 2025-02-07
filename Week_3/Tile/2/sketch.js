function setup() {
  createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, thirdColor) {
  translate(originX, originY);
  fill(primaryColor);
  stroke(secondaryColor);
  strokeWeight(5);
  rect(0, 0, 200, 200);
  circle(100, 50, 150);
  stroke(secondaryColor);
  strokeWeight(25);
  line(100, 0, 100, 200);
  noStroke();
  fill(thirdColor);
  circle(50, 100, 50);
  circle(150, 100, 50);
  fill(secondaryColor);
  circle(100, 165, 80);
  stroke(thirdColor);
  strokeWeight(25);
  line(0, 100, 200, 100);
  noFill();
  stroke(secondaryColor);
  strokeWeight(5);
  circle(100, 150, 150);
  fill(secondaryColor);
  strokeWeight(25);
  line(0, 45, 200, 45);
  fill(primaryColor);
  noStroke();
  circle(100, 170, 70);
}

function draw() {
  createTile(0, 0, 'red', 'white', 'grey');
  createTile(0, 200, 'magenta', 'black', 'cyan');
  createTile(0, 200, 'cyan', 'red', 'teal');
  createTile(200, -400, 'teal', 'magenta', 'red');
  createTile(0, 200, 'grey', 'teal', 'black');
  createTile(0, 200, 'black', 'grey', 'magenta');
  createTile(200, -400, 'magenta', 'teal', 'red');
  createTile(0, 200, 'white', 'cyan', 'teal');
  createTile(0, 200, 'teal', 'magenta', 'grey');
}