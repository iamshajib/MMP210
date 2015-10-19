function setup() {

    createCanvas(720, 400);

    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
//    background(51);
//    if (mouseY === pmouseY && mouseX === pmouseX) {
//        fill(0, 55, 156);
//    } else {
//        fill(250, 0, 56);
//    }
//
//
//    if (mouseX != pmouseX) {
//        fill(255, 0, 0);
//    } else if (mouseY != pmouseY) {
//        fill(255, 0, 0);
//
//    } else {
//        fill(0, 0, 255);
//    }
//
//
//
//    ellipse(mouseX, mouseY, 80, 80);

    if(mouseIsPressed){
        stroke(0, 0, 220);
        line(mouseX, mouseY, pmouseX, pmouseY);

    }





}
