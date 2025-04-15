class Particle {
  constructor() {
    this.position = createVector(random(0, width), random(0, height));
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    
    this.maxSpeed = 10;
    this.maxForce = 1;
  }
  
  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    
    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
  
  seek() {
    let x = map(this.position.x, 0, width, 0, 1) * scl;
    let y = map(this.position.y, 0, height, 0, 1) * scl;
    let val = chladni(x, y);
    
    let target = this.position.copy();
      
    if (abs(val) > threshold) {
      target.x += random(-2, 2);
      target.y += random(-2, 2);
    }
    
    let desired= p5.Vector.sub(target, this.position);
    desired.setMag(this.maxSpeed);
    let steering = p5.Vector.sub(desired, this.velocity);
    steering.limit(this.maxForce);
    
    return steering;
  }
  
  update() {
    this.edges();
    
    this.acceleration.add(this.seek())
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  display() {
    stroke(getRandomHexColor());
    fill(getRandomHexColor());
    rect(this.position.x, this.position.y, 2.5, 2.5);
  }
}

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

