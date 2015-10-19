function setup(){
    createCanvas(640, 480);

}

function draw(){
    background(237, 34, 93);
    fill(0);
    if (mouseIsPressed){
        rect(mouseX, mouseY, 150, 150);
        fill(200);
    }

    else {
        ellipse(mouseX, mouseY, 150, 150);
        fill(100);
    }
}
