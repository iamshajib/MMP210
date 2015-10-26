function setup(){
    //create a canvas. put into a variavle to associate with an element
    var cnv = createCanvas(800,3000);
    cnv.parent("window");

    var myArray = [];//create blank array
    //add stuff to the array with a loop

    for(var i=0; i<100; i++){
        myArray[i]="item"+i;
    }

    //loop to go through every item of the array

    for(var i=0; i<myArray.length; i++){
        myArray[i]+=5;

        console.log(myArray[i]);
    }

//    console.log(myArray[0]);
//    console.log(myArray[1]);
//    console.log(myArray[2]);
//    console.log(myArray);
//    console.log("myArray", myArray);
}//end setup
