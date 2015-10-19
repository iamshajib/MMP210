var globalColor;


function drawCircle(locX, locY, sizeW, sizeH, fillColor){
    noStroke();
    fill(globalColor);
    ellipse(locX, locY, sizeW, sizeH);
}



function setup(){
    createCanvas(windowWidth, windowHeight);
    globalColor = color(random(255), random(255), random(255));
}




function mousePressed(){
    globalColor = color(random(255), random(255), random(255));
}



function draw(){

    var randomX = random(windowWidth);
    var randomY = random(windowHeight);
    var randomSize = random(50);
    var myColor = color(189,225,150);


    drawCircle(randomX, randomY, randomSize, randomSize, myColor);


//    myColor = color(random(255), random(255), random(255));
//    drawCircle(mouseX, mouseY, 50, 75, myColor);
}

