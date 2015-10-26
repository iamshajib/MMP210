var red, green, blue;
var redX, redY, greenX, greenY, blueX, blueY;
var circleSize;
var lineColor;

// function drawCircle(locX, locY, sizeW, sizeH, fillColor){
//     noStroke();
//     fill(fillColor);
//     ellipse(locX, locY, sizeW, sizeH);
// }

function setup(){
  createCanvas(windowWidth, windowHeight);

  red = color(255,0,0);
  green = color(0,255,0);
  blue = color(0,0,255);

  circleSize = 50;

  redX = 50;
  redY = 50;
  greenX = 50;
  greenY = 150;
  blueX = 50;
  blueY = 250;

  lineColor = red;

  // drawCircle(redX, redY, 50, 50, color(red));
  // drawCircle(greenX, greenY, 50, 50, color(green));
  // drawCircle(blueX, blueY, 50, 50, color(blue));

  fill(red);
  ellipse(redX, redY, circleSize, circleSize);
  fill(green);
  ellipse(greenX, greenY, circleSize, circleSize);
  fill(blue);
  ellipse(blueX, blueY, circleSize, circleSize);
}

function mousePressed(){
	console.log('mouseClicked');
	var redLine = dist(mouseX, mouseY, redX, redY);
	var greenLine = dist(mouseX, mouseY, greenX, greenY);
	var blueLine = dist(mouseX, mouseY, blueX, blueY);

	if (redLine < circleSize) {
		console.log("clicked red");
		console.log("redLine", blueLine);
		console.log("circleSize", circleSize);
		lineColor = red;
	}

	if (greenLine < circleSize) {
		console.log("clicked green");
		console.log("greenLine", blueLine);
		console.log("circleSize", circleSize);
		lineColor = green;
	}

	if (blueLine < circleSize) {
		console.log("clicked blue");
		console.log("blueLine", blueLine);
		console.log("circleSize", circleSize);
		lineColor = blue;
	}
}

function draw(){
	if(mouseIsPressed){
        stroke(lineColor);
        line(pmouseX, pmouseY, mouseX, mouseY);

    }

}
