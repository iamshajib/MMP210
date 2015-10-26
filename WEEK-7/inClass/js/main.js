//global variable
var myArray = [];//create blank array

//bubble Consyructor; this is an object
function Bubble(){
    //create x and y properties (variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is for radious wich is one half the width of the circle
    this.bubbleSize = this.r*2; //width and height are twich the radius

    //method: draw the bubble
    //now this is an function and i will be use it outside any where
    this.drawBubble = function(){
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }

    this.changeColor = function(){
        fill("orange");
        this.drawBubble();

    }
}//end bubble


function setup(){
    //create a canvas. put into a variavle to associate with an element
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("window");

    //add stuff to the array with a loop

    for(var i=0; i<100; i++){
        //add bubbles to array, we need it always to create bubble
        myArray[i] = new Bubble();
        //here we are doing something with the bubble
        myArray[i].drawBubble();
    }

    console.log(myArray);

}//end setup

//listen for mouse pressed with the built-in mousePressed method
function mousePressed(){


//loop through myArray and check if the mouse is in each bubble
    var d;
  for(var i=0; i<myArray.length; i++){

    d = dist(mouseX,mouseY,myArray[i].x, myArray[i].y);
//      console.log("distannce",d);

//check to see if the distance is less then the radius
      //ie is the mouse in the bubble
    if(d < myArray[i].r){
//    console.log("clicked");
        myArray[i].changeColor()//call the color change function

    }


    }


}

