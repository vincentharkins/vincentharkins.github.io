let bubbles = []
function setup() {
  createCanvas(displayWidth- 300, displayHeight-300);
  for (let i = 0;i < 600;i++){
    let x = 20 + 100 * i;
    bubbles[i] = new Bubble(x,200,200)
  }
}

function draw() {
  background(220);
  for (i = 0; i < bubbles.length ;i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}
     
class  Bubble {
   constructor(){
    this.x = 400;
    this.y = 400;
    this.spx = random(1) ;
    this.spy = random(5);
    this.dx = 1 ;
    this.dy = 1 ;
    this.speed = 0 ;
   }
  move(){
   this.x = this.x + this.spx * this.dx
   this.y = this.y + this.spy * this.dy  
    if (this.x < 0){
       this.dx *= -1
       }
    if (this.x > width){
     this.dx *= -1 
    }
    if(this.y < 0){
      this.dy *= -1
      }
    if (this.y > height){
        this.dy *= -1
  }
  }
   show(){
     noStroke();
     fill(50,100,this.y/1.7)
     ellipse(this.x,this.y,5,5)
   } 
  }
