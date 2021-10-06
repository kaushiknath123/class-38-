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
    car1 = createSprite(100, 200);
    car2 = createSprite(300, 200);
    car3 = createSprite(500, 200);
    car4 = createSprite(700, 200);
    cars = [car1, car2, car3, car4];
    
 }
 play() {
     form.hide();

     
     Player.getPlayerInfo();

     if (allPlayer !== undefined){
         
        var index = 0
        var x = 0;
        var y;
   
         for(var clr in allPlayer){

            index = index+1;
            x = x + 200;
            y = displayHeight - allPlayer[clr].distance;
            
            cars[index - 1].x = x;
            cars[index - 1].y = y;

            if(index = player.index){
                cars[index - 1].shadeColor = 'red'
            }
            
         
         }
     }
     drawSprites();
 }
}
