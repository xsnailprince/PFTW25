var offset = 0;
var strum = 0.5;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  
  background(255);
  stroke(random(255));
  fill (0, 0, 0);
  beginShape();
  vertex(0, height);
  for(var x = 0; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, random(10), random(250));
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  offset += 0.1;
}