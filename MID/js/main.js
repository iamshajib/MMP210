var leftEye_x = 78;
var rightEye_x = 135;
var mouth_y = 70;
var line_x = 120;

function setup(){
	var myCanvas = createCanvas(window.innerWidth, window.innerHeight);

}


function draw() {

	clear();

	if (mouseIsPressed) {
		stroke(0);
		fill(244, 35, 0);
		leftEye_x = leftEye_x -1;
		rightEye_x = rightEye_x + 1;
        line_x = line_x + 1;

        mouth_y = mouth_y + 1;

		ellipse(leftEye_x, 70, 16, 32);
		ellipse(rightEye_x, 70, 16, 32);
        ellipse(110, mouth_y, 60, 60);

        line(90,line_x, 50, line_x+60);



	} else {
         leftEye_x = 78;
         rightEye_x = 135;
         mouth_y = 70;
         line_x = 120
		stroke(0);
		fill("rgba(51,51,51,0.5)");
		// rect(100, 100, 20, 100);
		ellipse(110, 165, 50, 130);
		ellipse(110, 70, 60, 60);
		ellipse(81, 70, 16, 32);
		ellipse(140, 70, 16, 32);
		line(90,120, 50, 160);
		line(130, 120, 170, 160);
	}
}
