/**
 * Created by mbadea on 12/7/2018.
 */

var hsText = [];
var hs = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

demo.state9 = function(){};
demo.state9.prototype ={
    preload: function(){
        game.load.image('button1','assets/sprite/button1.png');
        game.load.image('button2','assets/sprite/button2.png');
    },
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();

        for(var i = 1; i< 11; i++){
            game.add.text(500, 20 + (i * 90), i + '.', {fontSize: '40px'}).anchor.setTo(1,0);
        }

        for (var i = 1; i< 10; i++){
            hsText[i] = game.add.text(500, 20 + ((i + 1) * 90), hs[i], {fontSize: '40px'})
        }
        game.add.button(800, 400, 'button1', function(){

        });
        game.add.button(800, 600, 'button2', function(){

        });

        //obj.sort(function(a, b){
        // return b-a;
        // )  -- returneaza de la mare la mic
    }
}