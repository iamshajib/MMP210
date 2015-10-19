function drawCircle(locX, locY, sizeW, sizeH, fillColor){
    noStroke();
    fill(fillColor);
    ellipse(locX, locY, sizeW, sizeH);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){


    var randomX = random(windowWidth);
    var randomY = random(windowHeight);
    var randomSize = random(50);
    var myColor = color(random(255), random(255), random(255));

//    drawCircle(random(windowWidth),              random(windowHeight), random(100), random(100));

    drawCircle(randomX, randomY, randomSize, randomSize, myColor);


    myColor = color(200,0,0);
    randomX = random(windowWidth);
    randomY = random(windowHeight);
    drawCircle(randomX, randomY, randomSize, randomSize, myColor);

    myColor = color(random(255), random(255), random(255));
    drawCircle(mouseX, mouseY, 50, 75, myColor);
}

