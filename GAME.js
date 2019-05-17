let x = 12
let spx = 0
let spy = 0
let y = 21
let c = true
let e = []
let numB = 8
let score = 0
let time = 0
let power = 0
let pointx = 500
let pointy = 500
let pointsx = 1
let pointsy = 1
let points =0
let timez = 0
function setup() {
  createCanvas(700, 600);
  for (let i=0; i < numB ; i++) { 
   e[i] = new E(); 
  }
}
function draw() {
  if(points > 40 && score < 40){
   textSize(200);
  text('WIN',300,300,100)
  }
  if(points < 40 && score > 40){
    text('LOSE',200,300,100)
  }
  
  text(points,100,100,100)
  pointx = pointx + pointsx
  pointy = pointy + pointsy
  if(pointx < x && pointsx > -4){
   pointsx-= 0.5
  }
  if(pointx > x && pointsx < 4){
   pointsx += 0.5
  }
  if(pointy < y && pointsy < 2){
   pointsy += 0.1
  }
  if(pointy > y && pointsy > -2){
   pointsy -= 0.1
  }
  if(pointx < 10){
      pointsx *= -1
  }
  if(pointx > width- 20){
       pointsx *= -1
  }
  if(pointy < 0){
      pointsy *= -1
  }
  if(pointy> height -20 ){
       pointsy *= -1
  }
  
  if(pointx < x && pointx+10 > x - 20 && pointy < y && pointy+10 > y - 20){
    points += 1
  }
  
  fill(255,100,255)
    rect(pointx, pointy,20,20)
  for (let i=0; i < numB ; i++) { 
   e[i].move(); 
  }
  background(0,12);
  fill(255)
  x = spx +x
  y = y + spy
  if(keyCode === RIGHT_ARROW){
   spx = 3 
  keyCode = 0
  }
  if(keyCode === LEFT_ARROW){
   spx = -3 
    keyCode = 0
  }
  if(keyCode === UP_ARROW){
   spy = -3 
  keyCode = 0
  }
  if(keyCode === DOWN_ARROW){
   spy = 3 
    keyCode = 0
  }
  rect(x,y,10,10)
  if(x < 0){
   spx *= -1 
  }
  if(x > width-10){
   spx *= -1 
  }
  if(y < 0){
   spy *= -1 
  }
  if(y > height-10){
   spy *= -1 
  }
  fill(time)
  rect(10,10,10+ time/10,10)
 
  if(time < 2000){
      time += 10  
          }
  if(time >1900){
   power = 100 
    
  }
  if(time < 0){
   power = 0 
  }   
  if(pointx + 20 < x && pointx > x && pointy + 20 < y && pointy > y){
   points += 1 
  background(255,255,100) 
  }
  if(x < -10){
    x = 10
  }
  if(x > width + 10){
  x = 10
  }
    if(y < -10){
    y = 10
  }
  if(y > height + 10){
  y = 10
  }
}
class E {
  constructor(){
this.Ex = random(500)
this.Ey = random(500)
this.Esx = 1
this.Esy = 1
this.blockx = 200
this.blocky = 200
    
  }
  move(){  
  this.Ex = this.Ex + this.Esx
  this.Ey = this.Ey + this.Esy
    if(mouseIsPressed && power > 99){
      time -= 5 
   
   ellipse(mouseX,mouseY,10,10) 
     if (this.Ex < mouseX && this.Esx < 4){
   this.Esx += 0.3
  }
  if(this.Ex > mouseX && this.Esx > -4){
   this.Esx -=0.3
  }
  if (this.Ey < mouseY && this.Esy < 4){
   this.Esy += 0.3
  }
  if(this.Ey > mouseY && this.Esy > -4){
   this.Esy -=0.3
  }
    }
  if (this.Ex < x && this.Esx < 4){
   this.Esx += 0.05
  }
  if(this.Ex > x && this.Esx > -4){
   this.Esx -=0.05
  }
  if (this.Ey < y && this.Esy < 4){
   this.Esy += 0.05
  }
  if(this.Ey > y && this.Esy > -4){
   this.Esy -=0.05
  }
    if(this.Ex < -20){
      this.Esx *= -1.1
  }
    if(this.Ex > width){
       this.Esx *= -1.1
  }
     if(this.Ey < -20){
      this.Esy *= -1.1
  }
    if(this.Ey > height){
       this.Esy *= -1.1
  }
    if(this.Ex > x && this.Ex < x + 10 &&this.Ey > y && this.Ey < y + 10){
     background(255) 
      score += 1
    }
     if(this.Ex > x - 100 && this.Ex < x + 100 &&this.Ey > y - 100  && this.Ey < y + 100 && keyCode === 32){
       noFill();
       stroke(255)
     ellipse(x,y,200,200)
     this.Esy *= -1
     this.Esx *= -1
     keyCode = 0
    }
    if(this.Ex > this.blockx && this.Ex < this.blockx+ 100 &&this.Ey > this.blocky && this.Ey < this.blocky + 50){
      this.Esy *= -1
     this.Esx *= -1
    }
    if(this.blockx > -50){
     this.blockx -= 1
      
    }else{
     this.blockx = width
      
    }
      if(this.Ex > this.blockx && this.Ex < this.blockx+ 100 &&this.Ey > this.blocky + 200 && this.Ey < this.blocky + 250){
      this.Esy *= -1
     this.Esx *= -1
    }
      
    fill(0)
    textSize(100)
  text(score,100,100,100,100)
  fill(this.Ex,this.Ey,100)
  rect(this.Ex,this.Ey,10,10)
    fill(180)
    rect(this.blockx,this.blocky,100,50)
    rect(this.blockx,this.blocky + 200,100,50)
}
}
