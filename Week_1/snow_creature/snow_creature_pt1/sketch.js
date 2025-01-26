
function setup() {
  createCanvas(900, 750);
  stroke (0, 0, 0,)
}

function draw() {
  //background
  background(153, 255, 245);
  //snow creature
  strokeWeight(5);
  fill (255, 255, 255,);
  ellipse (450, 600, 400, 400);
  ellipse (450, 300, 200, 200); 
  //buttons
  fill (0, 0, 0,);
  ellipse (450, 600, 20, 20);
  ellipse (450, 525, 20, 20);
  ellipse (450, 675, 20, 20);
  fill (230, 112, 155);
  ellipse (350, 550, 20, 20);
  ellipse (550, 550, 20, 20);
  //arms
  strokeWeight (10);
  line (290, 500, 150, 350);
  line (590, 500, 750, 350);
  for(var i = 0; i < fingers; i++) {
    line(150, 350, 125  + (i * 50), 250 )
  } 
  for(var i = 0; i < fingers; i++) {
    line(750, 350, 775  - (i * 50), 250 )
  } 
}

var fingers = window.prompt("How many fingers?");

