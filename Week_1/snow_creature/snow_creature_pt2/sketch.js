function setup() {
  createCanvas(900, 750);
  stroke (0, 0, 0,)
}

function draw() {
  //background
  background(153, 255, 245);
  strokeWeight(0);
  fill(197, 227, 232);
  ellipse (600, 500, 900, 300);
  fill(218, 242, 245);
  ellipse (0, 500, 800, 300);
  fill(235, 244, 245);
  rect (0, 600, 900, 200);
  fill (218, 242, 245);
  ellipse (450, 800, 650, 350);
  fill (197, 227, 232);
  ellipse (450, 800, 450, 350);
  //snow creature
  strokeWeight(5);
  fill (255, 255, 255,);
  ellipse (450, 600, 400, 400);
  ellipse (450, 300, 200, 200); 
  //face
  fill (0, 0, 0,);
  arc (445, 335, 50, 50, 0, radians(180));
  fill (0, 0, 0,);
  arc (385, 300, 50, 50, 0, radians(320));
  arc (490, 300, 50, 50, 0, radians(320));
  //hat
  fill (255, 0, 0);
  rect (350, 50, 200, 200);
  fill (46, 117, 11);
  rect (350, 190, 200, 40);
  fill (255, 0, 0);
  rect (325, 230, 250, 30);
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

