//bubble Consyructor
function Bubble(){
    //create x and y properties (variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is for radious wich is one half the width of the circle
    this.bubbleSize = this.r*2; //width and height are twich the radius
    //draw the bubble
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
}//end bubble


function setup(){
    //create a canvas. put into a variavle to associate with an element
    var cnv = createCanvas(800,3000);
    cnv.parent("window");

    var myArray = [];//create blank array
    //add stuff to the array with a loop



    for(var i=0; i<10; i++){
        //add bubbles to array
        myArray[i] = new Bubble();
    }
//logout the array
    console.log(myArray);



    //loop to go through every item of the array

    for(var i=0; i<myArray.length; i++){

//        myArray[i]+="Shajib";

        console.log(myArray[i]);
    }

     console.log(myArray[i]);


}//end setup
