var car, obstacles, parking, policeCar, stop, plogo;
var direction = 90;
var pl1, pl2, pl3, pl4, pl5, pl6, pl7;
var song, win, backgroundSound;
var data, images;
var dataLoaded;

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial


function preload() {
    dataLoaded=false;
  backgroundSound = loadSound('sound/car.mp3');
}

function setup() {
    createCanvas(1300, 700);

    obstacles = new Group();


//    =========================================
   var url = "js/data/setup.json";

    //load the json file with jsonLoaded function as a callback
    loadJSON(url, jsonLoaded);
    console.log('setup complete');


//============================================

    //    -------------sound------------
    backgroundSound.play();

    soundFormats('mp3', 'ogg');
    song = loadSound('sound/PoliceCar.mp3');
    win = loadSound('sound/win.mp3');


    alert("Welcome! Park the car to win the game. Say, Go, Stop, Back, Up and Down to control the car. Be careful from the police car. Enojy :-)");


//    wall = createSprite(180, 150);
//    wall.addImage(loadImage("image/wall.png"));
//    obstacles.add(wall);
//
//    wall = createSprite(300, 530);
//    wall.addImage(loadImage("image/wall.png"));
//    obstacles.add(wall);
//
//    wall = createSprite(90, 600);
//    wall.addImage(loadImage("image/wall.png"));
//    obstacles.add(wall);
//
//    wall = createSprite(500, 330);
//    wall.addImage(loadImage("image/wall.png"));
//    obstacles.add(wall);
//
//    wall = createSprite(700, 587);
//    wall.addImage(loadImage("image/wall.png"));
//    obstacles.add(wall);
//
//    wall = createSprite(700, 100);
//    wall.addImage(loadImage("image/wall.png"));
//    obstacles.add(wall);
//
//    wall = createSprite(900, 400);
//    wall.addImage(loadImage("image/wall.png"));
//    obstacles.add(wall);


    //*****************STOP*************
    stop = createSprite(20, 350);
    stop.addImage(loadImage("image/stop.png"));
    obstacles.add(stop);

    stop = createSprite(330, 20);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);

    stop = createSprite(870, 20);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);

    stop = createSprite(370, 658);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);

    stop = createSprite(870, 658);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);


    //--------------------
    pl1 = createSprite(1130, 63);
    pl1.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl1);

    pl2 = createSprite(1130, 150);
    pl2.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl2);

    pl3 = createSprite(1130, 238);
    pl3.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl3);

    pl4 = createSprite(1130, 326);
    pl4.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl4);

    pl5 = createSprite(1130, 414);
    pl5.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl5);

    pl6 = createSprite(1130, 504);
    pl6.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl6);

    pl7 = createSprite(1130, 598);
    pl7.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl7);



    plogo = createSprite(1125, 105);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 198);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 280);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 370);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 455);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 550);
    plogo.addImage(loadImage("image/plogo.png"));




  //******************LOAD PARKING************************

    parking = createSprite(1200, 330);
    parking.addImage(loadImage("image/stop.png"));
    obstacles.add(parking);


    //load car img
    car = createSprite(100, 300);
    car.addImage(loadImage("image/car01.png"));

    //***load polica car***
    // for(var i=0; i<4; i++)
    // {
    policeCar = createSprite(600, 300, 50, 100);
    policeCar.addAnimation("image/police-car.png", "image/police-car.png");


    textSize(20);
    textAlign(LEFT);
    text("draw: up, down, back, go, stop", 20, 20);

    myRec.onResult = parseResult;
    myRec.start();

}

function carCollide(){
console.log('collide');
}


function draw() {
    background(255, 255, 255);

    //***wall obstacle***

    if(dataLoaded){
        car.collide(obstacles, carCollide); //console.log('obstacles',obstacles);
    obstacles.collide(car);
    }
//    console.log('car',car); //console.log('obstacles',obstacles);
    //car.collide(wall);
    //***police car movement***
    direction += 1;
    policeCar.setSpeed(6, direction);



    if (policeCar.overlap(car)) {
        car.setSpeed(0, 0);
        policeCar.setSpeed(0, 0);
        //alert("Game Over!");

        textSize(90);
        text("Game Over", 400, 300);
        fill(0, 102, 153);

        song.play();
    }


    if (parking.overlap(car)) {
        textSize(90);
        text("You Won", 400, 300);
        fill(0, 102, 153);
        win.play();
    }


    //   function mousePressed() {
    //     song.play();
    //   }


    drawSprites();
} //***end of draw***


//====================================
function jsonLoaded(jsonData) {
    console.log('json loaded', jsonData);
    data = jsonData;

    //show the images using standard p5js code
    showImages();

} //end jsonLoaded



function showImages() {
    console.log('showimages');

    for (var i = 0; i < data.wallLocations.length; i++) {
     var wall = createSprite(data.wallLocations[i][0], data.wallLocations[i][1]);
    wall.addImage(loadImage("image/"+data.wallImage));
    obstacles.add(wall);

//    data.wallLocations[i].x, data.wallLocations[i].y
    } console.log('obstacles',obstacles);
dataLoaded=true;
}



function parseResult() {
    // recognition system will often append words into phrases.
    // so hack here is to only use the last word:
    var mostrecentword = myRec.resultString.split(' ').pop();
    if (mostrecentword.indexOf("back") !== -1) {
        move('back');
    } else if (mostrecentword.indexOf("go") !== -1) {
        move('go');
    } else if (mostrecentword.indexOf("up") !== -1) {
        move('up');
    } else if (mostrecentword.indexOf("down") !== -1) {
        move('down');
    } else if (mostrecentword.indexOf("stop") !== -1) {
        move('stop');
    }
    console.log(mostrecentword);
}


function move(direction) {

    if (direction == "back") {
        car.setSpeed(2, 180);
    } else if (direction == "go") {
        car.setSpeed(2, 0);
    } else if (direction == "up") {
        car.setSpeed(2, 270);
    } else if (direction == "down") {
        car.setSpeed(2, 90);
    } else if (direction == "stop") {
        car.setSpeed(0, 0);
    }
}
