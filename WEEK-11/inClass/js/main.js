//var Penguins;
//function preload() {
//  var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json';
//  penguins = loadJSON(url,fileloaded);
//}

function setup() {
  console.log();
  var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json';
  loadJSON(url,fileloaded);

}

function fileloaded(penguins) {
    //challenge 1
    console.log(penguins);
    text(penguins.birds[5].members[1], 10, 10);

    //challenge 2
    console.log("cormorants" ,penguins.birds[1]);
    var cormorants = penguins.birds[1].members;
    for (var i =0; i<cormorants.length; i++){
        text(cormorants[i],20,20*i+50);
    }
}
