var gameState = 0;
var database;
var playerCount;
var form, game, player;
var allPlayer;
var distance = 0; 
var car1, car2, car3, car4;
var cars;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth, displayHeight);

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
  
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    
   
}


