//var width = 600;

function setup(){
    createCanvas(700, 600);
}
function draw(){
    background(237, 34, 93);
    fill(0);

    if (mouseX<(width/2)){
        ellipse(mouseX, mouseY, 100, 100);

    }

    else if (mouseX>(width/2)){
        rect(mouseX, mouseY, 100, 100);
    }


}
