function setup() {
    //   createCanvas(640, 480); 
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent('myContainer');
}



function draw() {
  

    if (mouseIsPressed) {
//        RGB
        fill(0, 55, 156);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}