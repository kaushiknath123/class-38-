class Game{
    constructor(){

    }
 getState(){
     var gameStateref = database.ref("GameState");
     gameStateref.on("value", function(data){
         gameState = data.val();
     })
 }
 update(state){
     database.ref("/").update({GameState:state})
 }
 start(){
    if(gameState === 0){
       
        player = new Player();
        player.getCount();
        form  = new Form();
        form.display();
    }
 }
 play() {
     form.hide();
     text("GAME START", 120, 100);
     Player.getPlayerInfo();

     if (allPlayer !== undefined){
         
        var displayPosition = 130
         
        
         for(var clr in allPlayer){

            if(clr === "player" + player.index){
                fill("red");
            }
            else{
                fill("black");
            }
         text(allPlayer[clr].name+":" + allPlayer[clr].distance, 120, displayPosition);
         displayPosition += 50;
         }
     }
 }
}
