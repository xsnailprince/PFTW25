const rectWidth = 70;
const rectHeight = 100;
let startingX = 200;
let startingY = 50;
let myCards = [];
let startingId = 0;
function setup() {
  createCanvas(1000, 500);
  background(0);
  for (let k = 0; k < 3; k++) {
    for (let i = 0; i < 4; i++) {
      rect(startingX, startingY, rectWidth, rectHeight);
      myCards.push({ x: startingX, y: startingY, id: startingId });
      startingX += 150;
      startingId++;
    }
    startingY += 150;
    startingX = 200;
  }
  
  console.log(myCards);
}

function mousePressed() {
  for(let j =0; j< myCards.length; j++) {
      let distance = dist(mouseX, mouseY, myCards[j].x, myCards[j].y);
  if (distance < rectWidth / 2, distance < rectHeight / 2) {
    console.log('card has been clicked', myCards[j].id);
    } 
  } 
}