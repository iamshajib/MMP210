var aliens; //global variable


//STARTING OF THE OBJECT
function Alien(startX, startY) {
    //log to see if it is created
    //console.log('make alien');
    this.leftEye = startX + 81;
    this.rightEye = startX + 140;
    this.head = startY + 70;
    this.figure = startY + 165;
    this.line_lx = startX + 95;
    this.line_ly = startY + 110;
    this.line_rx = startX + 124;
    this.line_ry = startY + 110;

    this.draw = function () {
        //stroke(0);
        fill("#FE2E2E");
        ellipse(startX + 110, this.figure, 50, 130); //figure

        fill("#01DFA5");
        ellipse(startX + 110, this.head, 60, 60); //head

        fill("#585858");
        ellipse(this.leftEye, startY + 70, 16, 32); //left eye
        ellipse(this.rightEye, startY + 70, 16, 32); //right eye

        line(this.line_lx, this.line_ly, this.line_lx - 50, this.line_ly + 50); //line left
        line(this.line_rx, this.line_ry, this.line_rx + 50, this.line_ry + 50); //line right
    }



    this.moveAway = function () {

         //this.figure = this.figure -= random(-5,5);
        this.figure = this.figure - 1;

        // this.head = this.head + random(-20,20);
        this.head = this.head + 1;

        this.leftEye = this.leftEye - 1;
        this.rightEye = this.rightEye + 1;

        this.line_lx--;;
        this.line_rx++;


        ellipse(110, this.figure, 50, 130);
        ellipse(110, this.head, 60, 60);
        ellipse(this.leftEye, 70, 16, 32);
        ellipse(this.rightEye, 70, 16, 32);

        line(this.line_l, 120, this.line_l - 50, 160);
        line(this.line_r, 120, this.line_r + 50, 160);

        this.draw();

    }

}
//ENDING OF THE OBJECT


//STARTING OF S-E-T--U-P
function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);

    aliens = [];
    var x = 0;
    var y = 0;
    var gridWidth = width - 100;

    for (var i = 0; i < 30; i++) {
        console.log(i);

        var myAlien = new Alien(x, y);

        aliens.push(myAlien);

        myAlien.draw();

        x += 150;

        if (x > gridWidth) {
            x = 0;
            y += 270;
        } //end if
    } //end for loop

}



//STARTING OF D-R-A-W
function draw() {

    //clear();
    background(255);

    for (var i = 0; i < aliens.length; i++) {
        if (mouseIsPressed) {
            console.log(i);
            aliens[i].moveAway();

        }
        aliens[i].draw();
    }

}

