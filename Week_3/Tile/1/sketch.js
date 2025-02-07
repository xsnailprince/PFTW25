function setup() {
  createCanvas(200, 200);
  noLoop();
}

function createTile() {
  translate(0, 0);
  fill('magenta');
  stroke('black');
  strokeWeight(5);
  rect(0, 0, 200, 200);
  circle(100, 50, 150);
  stroke('black');
  strokeWeight(25);
  line(100, 0, 100, 200);
  noStroke();
  fill('white');
  circle(50, 100, 50);
  circle(150, 100, 50);
  fill('black');
  circle(100, 165, 80);
  stroke('white');
  strokeWeight(25);
  line(0, 100, 200, 100);
  noFill();
  stroke('black');
  strokeWeight(5);
  circle(100, 150, 150);
  fill('black');
  strokeWeight(25);
  line(0, 45, 200, 45);
  fill('magenta');
  noStroke();
  circle(100, 170, 70);
}

function draw() {
  createTile();
}