let money = 0;
let x  = 1;
let Solar = [];
let p = 0;
let workers= [1];
let worker = 1;
let s = 0;
var sale = 1;
let ex = -100;
let ey = -200;
let checkpoint= 1;
let r = 1;
let bonus = 1;
let show  = false;
let ry = 1;
let upgrade = 1;
function setup() {
    createCanvas(400, 400);

}

function draw() {

    if(s > 40){
        s = 0
    }else{
        s += 1
    }
    for (let i = 0; i < workers;i++){
        x = workers
    }
    background(220);
    for (let i = 0; i < workers;i++){

        rect(10,10 *i+i,10,10)
    }

    stroke(12);
    strokeWeight(10);
    rect(250,100,50,50)
    rect(100,100,100,100)
    if(mouseX < 200 && mouseX > 100 && mouseY < 200 && mouseY > 100 && mouseIsPressed != true){
        fill(0)
    }else{
        fill(255,130,190);
    }
    strokeWeight(0);
    textSize(50)
    text(money,100,50,10)
    workers = [worker]
    if(s === 10) {
        money += worker * upgrade
    }

    if(mouseX < 300 && mouseX > 250 && mouseY < 200 && mouseY > 100){
        fill(100,100,100)
    }
    text (worker,250,50)
    text (11 * worker +  sale ,250,90)
    if(s === 15){
        sale += 1 + Math.round(random(-3,1));
        r = random(20,width-20)
        ry = random(250,height-10)
    }
    if (sale === 0){
        sale = 1
    }

    if(mouseX > ex - 10 && mouseX < ex + 20 && mouseY > ey - 10 && mouseY < ey + 20){
        fill(110,255,200)
    }
    fill(100,200,10)
    ellipse (ex ,ey, 30,30)
    if(money > 5 * checkpoint){
        checkpoint += 1
        ex = r
        ey = ry
        if(show === false ){
            show = true
        }
        if(show === true){
            show = false
            bonus += 1
        }
    }

    fill(255,130,190);
}


function mouseReleased() {
    if(mouseX < 200 && mouseX > 100 && mouseY < 200 && mouseY > 100){
        money += 1 * upgrade
        fill(200)
    }

    if(mouseX < 300 && mouseX > 250 && mouseY > 100 && money < 150 && money > 11 * worker + sale ){
        fill(100,100,100)
        worker += 1
        money -= 11 * worker + sale
    }
    if(mouseX > ex - 10 && mouseX < ex + 20 && mouseY > ey - 10 && mouseY < ey + 20){
        background(0)
        money -=10 * upgrade ^ 4
        upgrade += 1
    }
}
