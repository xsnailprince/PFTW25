let rotateBy = 5;

function setup() {
  createCanvas(1250, 1250);
  background(0);
  angleMode(DEGREES);
}

function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360);
  noFill ();
  stroke('white');
  strokeWeight(1);
  beginShape();
  vertex(269, 42 + alt);
  vertex(325, 196 / alt);
  vertex(489, 201);
  vertex(360, 295);
  vertex(406, 454 + alt);
  vertex(268, 360);
  vertex(136, 454);
  vertex(183, 295);
  vertex(50, 201 / alt);
  vertex(218, 196 / alt);
  vertex(269, 42);
  endShape();
}

function draw() {
  translate(620, 620);
  rotate(rotateBy);
  makeArm(rotateBy);
  rotateBy += 15;
}

function mousePressed() {
  noLoop();
}
