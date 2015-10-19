//here we r Creating a function call drawCircle

function drawCircle(sizeW, sizeH){
    noStroke();
    fill(200);
    ellipse(mouseX, mouseY, sizeW, sizeH);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    drawCircle(150, 75);
}
