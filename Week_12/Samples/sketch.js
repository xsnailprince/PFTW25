var song;
var button;

function setup() {
  createCanvas(400, 400);
  song = loadSound("Explosion.wav");
  button = createButton("boom");
  button.mousePressed(togglePlaying);
  
}

function togglePlaying() {
  song.play();
}
