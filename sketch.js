
let Solar= [];
let p =0;
let score = 0;
function setup() {
    createCanvas(600,600);
    for (let i = 0; i < 1;i++){
        Solar[i]= new solar();
    }
}

function draw() {
    background(0,100);
    for (let i = 0; i < 1;i++){
        Solar[i].move();
        Solar[i].show();
    }
    fill(255)

}
class solar{
    constructor(){
        this.x = 10;
        this.y = 200;
        this.spx = 1;
        this.spy = 1;
        this.dx = 1;
        this.dy = 1;
        this.ex = width -20;
        this.ey = 10;
        this.bx = 100
        this.by = 10
        this.start = 7
        this.bsx = this.start
        this.bsy = 2
        this.esx = 1
        this.esy = 1
        this.score = 0;
        this.score2 = 0;
        this.orbitx = width /2
        this.orbity = height/2


    }

    move(){
        textSize(100);
        this.y = mouseY -50
        this.ey = this.ey + this.esy
        this.bx = this.bx + this.bsx
        this.by = this.by + this.bsy
        if(this.bx < 0){
            this.by = random(100,300)
            this.bx = 400
            this.bsx = this.start
            this.score += 1
        }
        if(this.bx > width){
            this.by = random(100,300)
            this.bx = 400
            this.score2 += 1
            this.bsx = -this.start
        }
        if(this.by < 0){
            if(this.bsy > 10){
                this.bsy *= -1 +random(-0.5,0.5)
            }else{
                this.bsy *= -1
            }

        }
        if(this.by > height){

            if(this.bsy > 10){
                this.bsy *= -1 +random(-0.5,0.5)
            }else{
                this.bsy *= -1
            }
        }
        text(this.score2,400,100,100)
        text(this.score,100,100,100)

        if( this.bx - 10 < this.x && this.bx > this.x&& this.by > this.y + 50 && this.by -50< this.y + 50 ){
            this.bsx *= -1

        }
        if(this.bx - 10 < this.x && this.bx > this.x&& this.by > this.y && this.by - 50< this.y ){
            this.bsx *= -1
            this.bsy *= -1
        }

        if(this.bx - 10 < this.ex && this.bx > this.ex&& this.by > this.ey && this.by - 50< this.ey){
            this.bsx *= -1
            this.bsy *= -1
        }
        if( this.bx - 10 < this.ex && this.bx > this.ex&& this.by > this.ey + 50 && this.by -50< this.ey + 50 ){
            this.bsx *= -1
        }
        if(this.ey +50 < this.by && this.esy < 10){
            this.esy += .8
        }
        if(this.ey +50 > this.by && this.esy > -10){
            this.esy -= .8
        }
        if(this.bx >  this.orbitx){
            this.bsx -= .1
        }
        if(this.bx <  this.orbitx){
            this.bsx += .1
        }
        if(this.by >  this.orbity){
            this.bsy -= .1
        }
        if(this.by <  this.orbity){
            this.bsy += .1
        }
//     if(this.orbity > 0){
//      this.orbity -= 1
//     }else{
//      this.orbity = height

//     }

    }
    show(){
        ellipse(this.orbitx,this.orbity,10,10)
        rect(this.x,this.y,10,100)
        rect(this.ex,this.ey,10,100)
        ellipse(this.bx,this.by,10,10)


    }
}
