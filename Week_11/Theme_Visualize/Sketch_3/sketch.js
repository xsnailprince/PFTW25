let particles = []; let num = 15000;
let m = 5; let n = 1; let threshold = 0.05;
let minMN = 1; let maxMN = 6;
let changePattern = true;
let scl = 1;


function setup() {
  createCanvas(400, 400);
  for (let i=0; i<num; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255);
  if (changePattern) {
    randomPatterns();
  }
  
  for (let i=0; i<particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function chladni(x, y) {
  let L = 1;
  return cos(n * PI * x / L) * cos(m * PI * y / L) -
          cos(m * PI * x / L) * cos(n * PI * y / L);
}

function randomPatterns() {
  m = floor(random(minMN, maxMN));
  n = floor(random(minMN, maxMN));
  
  if (m === n) {
    m = floor(random(minMN, maxMN));
  }
  
  changePattern = false;
  
  for (let i=0; i<particles.length; i++) {
    particles[i].velocity = p5.Vector.random2D().mult(random(2, 5));
  }
}

function mousePressed() {
  changePattern = true;
}
