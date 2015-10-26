function setup() {

    createCanvas(windowWidth, windowHeight);


    var x = 0;
    var y = 0;
    var gridWidth = width - 100;

    for (var i = 0; i < 10; i++) {
        console.log(i);
        drawWindow(x, y);
        //increment our X
        x += 220; //same as x=x+120

        //check if x is past the grid width
        if (x > gridWidth) {
            // set x back to the begining
            x = 0;
            //move y down
            y += 270;
        } //end if
    } //end for loop
} //end setup





function drawWindow(startX, startY) {


    //top
    strokeWeight(1);
    stroke('black');
    fill(148,36,36);
    var winWidth = 175;
    var winHeight = 20;
    rect(startX, startY, winWidth, winHeight);

    //left
    strokeWeight(1);
    stroke('black');
    fill(148,36,36);
    var winWidth = 20;
    var winHeight = 175;
    rect(startX+15, startY+20, winWidth, winHeight);

    //right
    strokeWeight(1);
    stroke('black');
    fill(148,36,36);
    var winWidth = 20;
    var winHeight = 175;
    rect(startX+140, startY+20, winWidth, winHeight);

    //bottom
    strokeWeight(1);
    stroke('black');
    fill(148,36,36);
    var winWidth = 175;
    var winHeight = 20;
    rect(startX, startY+195, winWidth, winHeight);


    strokeWeight(1);
    stroke('black');
    fill(119,114,114);
    var winWidth = 105;
    var winHeight = 175;
    rect(startX+35, startY+20, winWidth, winHeight);

    //window lines
    strokeWeight(4);
    stroke(51,153,153);
    line(startX+90, startY+23, startX+90, startY+18 + winHeight);

    line(startX+38, startY+300 *.333, startX+33 + winWidth, startY+300 *.333);

}
