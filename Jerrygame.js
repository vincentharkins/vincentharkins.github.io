let click = false;
let balloons = [];
let score = 0;
let numB = 5;
let start = true;

function setup() {
  // if (start === false){
  //   button = createButton('easy');
  //   button.position(20, 65);
  //   if(mouseIsPressed){
  //    start = true 
  //   }
  // } 
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
  if (start === true) {
    for (let i = 0; i < numB; i++) {
      balloons[i] = new balloon();
    }
  }
}

function draw() {
  background(10, 10);

  if (start === true) {
    for (let i = 0; i < numB; i++) {
      balloons[i].show();
      balloons[i].move();
    }
  }
}

class balloon {
  constructor() {
    this.x = random(width);
    this.y = height + random(200);
    this.xS = 50;
    this.yS = 50;
    this.sc = second();
    this.end = map(this.sc, 0, 1, 0, score);
  }
  show() {
    this.sc = second();
    this.end = map(this.sc, 0, 1, 0, score / 100 + 1);
    strokeWeight(8);
    noFill();
    arc(200, 200, 300, 300, 0, score);
    stroke(100, 100, 150);
    noFill();
    arc(this.x, this.y, this.xS - 40, this.yS - 40, 0, 359);
    stroke(150, 200, 100)
    arc(this.x, this.y, this.xS - 20, this.yS - 20, 0, this.end * 9);
    stroke(150, 250, 150);
    arc(this.x, this.y, this.xS, this.yS, 0, score);
    strokeWeight(.1);
    stroke(255, 0, 0)
    textSize(150);
    text(score, 80, 250, 10)
  }
  move() {
    this.y -= 1
    if (score > 200) {
    this.y -= 1
    }
    if (score > 100) {
    this.y -= 1
    }
    if (score > 500) {
      textSize(50)
    text ('You win!',100,100,100)
    }
    if (this.y < 0) {
      this.y = height + 10 + random(numB * 2)
      this.x = random(width - 20) + 20
      score -= 100
    }
    if (mouseX > this.x - this.xS / 2 && mouseX < this.x + this.xS / 2 && mouseY > this.y - this.yS / 2 && mouseY < this.y + this.yS / 2) {
      score += 1
      this.y = height + 20
    } else {
      if (keyCode === DOWN_ARROW) {
        fill(random(255), random(255), random(255))
      } else {
        fill(255)
      }
    }
  }
}

function go() {
  start = true
}
